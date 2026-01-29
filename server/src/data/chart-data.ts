// Last 30 days traffic data for websites
export const websiteTrafficData = {
  "flowbite.com": {
    categories: ["Day 1", "Day 5", "Day 10", "Day 15", "Day 20", "Day 25", "Day 30"],
    series: [
      {
        name: "Visitors",
        data: [12500, 14200, 13800, 16500, 18200, 21000, 24500],
      },
      {
        name: "Page Views",
        data: [35000, 42000, 38500, 48000, 52000, 61000, 72000],
      },
    ],
  },
  "themesberg.com": {
    categories: ["Day 1", "Day 5", "Day 10", "Day 15", "Day 20", "Day 25", "Day 30"],
    series: [
      {
        name: "Visitors",
        data: [8200, 9100, 8800, 10500, 11200, 12800, 14200],
      },
      {
        name: "Page Views",
        data: [22000, 26000, 24500, 31000, 33000, 38000, 42000],
      },
    ],
  },
};

export type WebsiteKey = keyof typeof websiteTrafficData;
