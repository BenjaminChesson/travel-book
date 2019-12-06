import { mount } from "@vue/test-utils"
import Loader from "./Loader.vue"

describe("Loader", () => {
  it("is a Vue instance", () => {
    const Component = mount(Loader)
    expect(Component.isVueInstance()).toBeTruthy()
  })
})
