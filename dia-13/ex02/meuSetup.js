class Computer {
  constructor(type, processor, video, storage, ramMemory, ssd) {
    this.type = type;
    this.processor = processor;
    this.video = video;
    this.storage = storage;
    this.ramMemory = ramMemory;
    this.ssd = ssd;
  }

  displayInformation() {
    console.log(`Type: ${this.type}`);
    console.log(`Processor: ${this.processor}`);
    console.log(`Video: ${this.video}`);
    console.log(`Storage: ${this.storage}`);
    console.log(`Ram Memory: ${this.ramMemory}`);
    console.log(`SSD: ${this.ssd}`);
  }
}

const myComputer = new Computer(
  "Notebook",
  "Intel core i5",
  "Integrated",
  "500GB",
  "8GB",
  true
)

myComputer.displayInformation();
