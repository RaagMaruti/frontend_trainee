import { defineCliConfig } from "sanity/cli"

export default defineCliConfig({
  api: {
    projectId: "7dzx18r8",
    dataset: "production"
  },
  /**
   * Enable auto-updates for studios.
   * Learn more at https://www.sanity.io/docs/cli#auto-updates
   */
  studioHost: "maruti-cms",
  autoUpdates: true,
})
