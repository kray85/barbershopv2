import {defineCliConfig} from 'sanity/cli'

const projectId = process.env.REACT_APP_SANITY_PROJECT_ID
const dataset = process.env.REACT_APP_SANITY_DATASET
export default defineCliConfig({
  api: {
    projectId,
    dataset
  }
})
