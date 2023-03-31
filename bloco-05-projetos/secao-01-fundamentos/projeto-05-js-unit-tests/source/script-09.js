const createMenu = (object) => {
  const menu = {
    fetchMenu: () => object,
    consumption: [],
    order: (string) => {
      for (const key in object) {
        if (object[key][string]) {
          menu.consumption.push(string);
          return menu.consumption;
        }
      }

      return 'Item indisponível';
    },
    pay: () => {
      let bill = 0;

      menu.consumption.forEach((element) => {
        for (const key in object) {
          if (object[key][element]) {
            bill += object[key][element];
          }
        }
      });

      return bill + (bill * 0.10);
    }
  };

  return menu;
};

module.exports = createMenu;
