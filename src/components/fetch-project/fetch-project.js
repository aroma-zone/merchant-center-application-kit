import React from 'react';
import PropTypes from 'prop-types';
import {
  compose,
  getDisplayName,
  setDisplayName,
  shouldUpdate,
} from 'recompose';
import { deepEqual } from 'fast-equals';
import { graphql } from 'react-apollo';
import { GRAPHQL_TARGETS } from '@commercetools-local/constants';
import ProjectQuery from './fetch-project.graphql';

const graphqlOptions = {
  alias: 'withProject',
  name: 'projectData',
  options: ownProps => ({
    variables: {
      target: GRAPHQL_TARGETS.MERCHANT_CENTER_BACKEND,
      projectKey: ownProps.projectKey,
    },
  }),
  // Rename `loading` -> `isLoading`, to follow our naming convention
  // https://github.com/commercetools/merchant-center-frontend/issues/2701
  props: ({ projectData }) => ({
    projectData: {
      isLoading: projectData.loading,
      error: projectData.error,
      project: projectData.project,
    },
  }),
};

const FetchProject = props => props.children(props.projectData);
FetchProject.displayName = 'FetchProject';
FetchProject.propTypes = {
  projectKey: PropTypes.string.isRequired,
  children: PropTypes.func.isRequired,
  // Injected
  projectData: PropTypes.shape({
    isLoading: PropTypes.bool.isRequired,
    error: PropTypes.object,
    project: PropTypes.object, // see graphql query shape
  }).isRequired,
};

// React component
const FetchProjectData = compose(
  setDisplayName('FetchProject'),
  graphql(ProjectQuery, graphqlOptions),
  // a render is triggered because the reference of the userData prop changes
  // although the objects content didn't change
  shouldUpdate((props, nextProps) => !deepEqual(props, nextProps))
)(FetchProject);

// HoC
const withProject = (getProjectKey, mapDataToProps) => Component => {
  const WrappedWithProject = props => (
    <FetchProjectData projectKey={getProjectKey(props)}>
      {projectData => {
        const mappedProps = mapDataToProps
          ? mapDataToProps(projectData)
          : projectData;
        return <Component {...props} {...mappedProps} />;
      }}
    </FetchProjectData>
  );
  WrappedWithProject.displayName = `withProject(${getDisplayName(Component)})`;
  return WrappedWithProject;
};

// Public exports
export default FetchProjectData;
export { withProject };

// For testing
export { ProjectQuery, FetchProject };
