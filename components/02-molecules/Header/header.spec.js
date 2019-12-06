import { mount, RouterLinkStub } from "@vue/test-utils"
import Header from "./header.vue"

describe("Header", () => {
  it("is a Vue instance", () => {
    const Component = mount(Header, {
      stubs: {
        NuxtLink: RouterLinkStub
      }
    })
    expect(Component.isVueInstance()).toBeTruthy()
  })
})
