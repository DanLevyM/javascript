const Singleton = (function () {
  function ProcessManager() {
    this.numberOfProcess = 0;
  }

  let pManager;

  function createProcessManager() {
    pManager = new ProcessManager();
    return pManager;
  }

  return {
    getProcessManager: () => {
      if(!pManager)
        pManager = createProcessManager();
      return pManager;
    }
  }
})();

const processManager1 = Singleton.getProcessManager();
const processManager2 = Singleton.getProcessManager();

console.log(processManager1 === processManager2);