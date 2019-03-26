import gql from 'graphql-tag';

export default gql`
{
	scores {
		name
		composer
		id
		description
		linkURL
	}
}
`;
