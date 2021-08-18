import {render, screen, waitFor, waitForElementToBeRemoved } from '@testing-library/react'
import { Async } from '.'

describe("test example to async waiter", () => {
  it("wait for button to be in document", async () => {
    render(<Async/>)
    expect(screen.getByText("Hello World")).toBeInTheDocument()

    // screen.logTestingPlaygroundURL() playground para saber oque testar

    await waitFor(() => {
      return expect(screen.getByText("Button")).toBeInTheDocument()
    })
  })

  it("wait for button2 to be removed", async () => {
    render(<Async/>)
    expect(screen.getByText("Hello World")).toBeInTheDocument()

    await waitForElementToBeRemoved(screen.queryByText(/Button2/))
  })
})