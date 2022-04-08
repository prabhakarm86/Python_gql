import { API } from '../datasource.js';

export const Mutation={
	createEmployee:(root, { input }, { dataSources })=> dataSources.API.createEmployee(input)
     
}
