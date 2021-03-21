const SHOP_DATA = {
  tools: {
    id: 1,
    title: "Tools on Rent",
    routeName: "tools",
    items: [
      {
        id: 1,
        name: "Drill Machine",
        description:
          "New Ergonomically designed drill for Woodworking, Aluminium & Steel. Drilling diameter in Aluminium : 13 mm, in Wood : 20 mm, in Steel : 10 mm.",
        images: [
          "https://i.ibb.co/vdPVyxM/81qmsu-SXw-L-SL1500.jpg",
          "https://i.ibb.co/jf9wKnq/81-Jez-DJsnn-L-SL1500.jpg",
        ],
        category: "tools",
        pricePerDayInPaise: 2000,
        pricePerMonthInPaise: 40000,
        pricePerWeekInPaise: 12000,
        deliveryPriceInPaise: 60000,
        inverntory: 6,
        depositInPaise: 200000,
        isBulkAvailable: true,
      },
    ],
  },
};

export default SHOP_DATA;
