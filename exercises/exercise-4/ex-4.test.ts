describe("TacoBuilder", () => {
  it("describes a taco menu", () => {
    //Let's start with some basic ingredients
        


    enum Herb {
      Cilantro,
      Basil,
      GreenOnions
    }

    enum Sauce {
      Pico,
      Roja,
      Verde
    }

    interface Item {}

    interface Order {
      item: Item;
      cost: number;
    }

    interface BaseProteinOrder extends Order {
      protein: Protein;
      cost: number;
    }

    interface ChickenOrder extends BaseProteinOrder {
      protein: Protein.Chicken,
      cost: 5
    }

    interface BeefOrder extends BaseProteinOrder {
      protein: Protein.Beef,
      cost: 6
    }

    type ProteinOrder = ChickenOrder;

    enum Protein {
      Chicken,
      Tempeh,
      Fish,
      Beef,
      Carnitas
    }

    enum Shell {
      CornTortilla,
      FlourTortilla
    }

    type TacoOrder = {
      protein: ProteinOrder;
      sauce: Sauce;
      herb: Herb;
      shell: Shell;
    };

    type BurritoOrder = {
      protein: ProteinOrder;
      sauce: Sauce;
      herb: Herb;
      shell: Shell.FlourTortilla;
    };

    // type Order = TacoOrder | BurritoOrder

    //Build a type that describes an order from the taco truck
    //Test that it disallows an order for a burrito w/ corn tortilla
  });
});


// Describe a taco shop menu
// Here are some basic types