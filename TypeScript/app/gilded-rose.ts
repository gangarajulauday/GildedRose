export class Item {
  name: string;
  sellIn: number;
  quality: number;

  constructor(name, sellIn, quality) {
    this.name = name;
    this.sellIn = sellIn;
    this.quality = quality;
  }
}

export class GildedRose {
  items: Array<Item>;

  constructor(items = [] as Array<Item>) {3
    this.items = items;
  }

  maxlengthCheck(valueToUpdate, currentValue) {
    if (valueToUpdate < 0) {
      return currentValue > 0 ? valueToUpdate : 0
    } else {
      if (currentValue > 50) {
        return 0
      }
    }
    return valueToUpdate
  }
  updateQuality() {
    const SULFURAS_NAME = 'Sulfuras, Hand of Ragnaros'
    const BACKSTAGE_NAME = 'Backstage passes to a TAFKAL80ETC concert'
    const AGG = 'Aged Brie'
    const CON = 'Conjured'
    const DEFAULT_MAPPING = {
      [SULFURAS_NAME]: 0,
      [BACKSTAGE_NAME]: -1,
      [AGG]: 1,
      [CON]: -2
    }
    const SELLIN_MAPPING = {
      "10": {
        [SULFURAS_NAME]: 0,
        [BACKSTAGE_NAME]: 1,
        [AGG]: 1,
        [CON]: -2
      },
      "5": {
        [SULFURAS_NAME]: 0,
        [BACKSTAGE_NAME]: 1,
        [AGG]: 1,
        [CON]: -2
      },
      "0": {
        [SULFURAS_NAME]: 0,
        [BACKSTAGE_NAME]: 1,
        [AGG]: 1,
        [CON]: -2
      },
    }
    for (let i = 0; i < this.items.length; i++) {
      const item = this.items[i]
      const name = item.name

      let qualityToUpdate = 0
      //default update of Quality
      qualityToUpdate = qualityToUpdate + this.maxlengthCheck(DEFAULT_MAPPING[name], qualityToUpdate)
      if (item.name != SULFURAS_NAME) {
        item.sellIn = item.sellIn - 1
      }
      //update Quality based on sellIn
      Object.keys(SELLIN_MAPPING).forEach(sellInSays => {
        if (this.items[i].sellIn <= parseInt(sellInSays)) {
          qualityToUpdate = qualityToUpdate + this.maxlengthCheck(SELLIN_MAPPING[sellInSays][name], qualityToUpdate)
        }
      })
    }
  }
}
