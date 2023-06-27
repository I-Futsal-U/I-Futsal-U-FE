const initMockAPI = async (): Promise<void> => {
  if (typeof window === "undefined") {
    const { server } = await import("./server");
    server.listen();
  } else {
    // const { worker } = await import("../mocks/browser");
    // worker.start({ onUnhandledRequest: "bypass" });
  }
};

export default initMockAPI;
