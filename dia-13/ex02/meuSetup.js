class Computer {
  Type
  Processor
  Video
  Storage
  RamMemory
  Ssd

  constructor(type, processor, video, storage, ramMemory, ssd) {
    this.Type = type;
    this.Processor = processor;
    this.Video = video;
    this.Storage = storage;
    this.RamMemory = ramMemory;
    this.Ssd = ssd;
  }

  displayInformation() {
    console.log("Computer information: ");
    console.log(`Type: ${this.Type}`);
    console.log(`Processor: ${this.Processor}`);
    console.log(`Video: ${this.Video}`);
    console.log(`Storage: ${this.Storage}`);
    console.log(`Ram Memory: ${this.RamMemory}`);
    console.log(`SSD: ${this.Ssd}`);
  }
}

const myComputer = new Computer("Notebook", "Intel core 5", "Integrado", "500gb", "8gb", true)