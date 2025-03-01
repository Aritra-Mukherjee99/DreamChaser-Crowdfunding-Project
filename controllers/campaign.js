const db = require("../models");

// The below code is only for development stage
// To add some default items in our DB (Campaign collection) and check the API
const item1 = new db.Campaign({
  title: "test1",
  subTitle: "subTitle1",
  description: "test1 description here...",
  imageUrl: "https://image.shutterstock.com/image-photo/bright-spring-view-cameo-island-260nw-1048185397.jpg",
  required: 500,
  start: "2020-12-22T11:18:54.919Z",
});

const item2 = new db.Campaign({
  title: "test2",
  subTitle: "subTitle2",
  description: "test2 description here...",
  imageUrl: "https://image.shutterstock.com/image-photo/bright-spring-view-cameo-island-260nw-1048185397.jpg",
  required: 100,
  start: "2020-12-20T11:18:54.919Z",
});

const item3 = new db.Campaign({
  title: "test3",
  subTitle: "subTitle3",
  description: "test3 description here...",
  imageUrl: "https://image.shutterstock.com/image-photo/bright-spring-view-cameo-island-260nw-1048185397.jpg",
  required: 5000,
  start: "2020-12-19T11:18:54.919Z",
});

const item4 = new db.Campaign({
  title: "test4",
  subTitle: "subTitle4",
  description: "test4 description here...",
  imageUrl: "https://image.shutterstock.com/image-photo/bright-spring-view-cameo-island-260nw-1048185397.jpg",
  required: 50000,
  start: "2020-12-22T11:19:54.919Z",
});

const defaultItems = [item1, item2, item3, item4];

// Only run this during development to insert default items
db.Campaign.find().exec((err, results) => {
  if (results.length === 0) {
    db.Campaign.insertMany(defaultItems, (err) => {
      if (err) {
        console.error("Error inserting default items:", err);
      } else {
        console.log("Successfully added default items to Campaign collection in DB");
      }
    });
  }
});

// Hide transaction ID function
function hideTransactionID(donors) {
  if (!donors || donors.length === 0) return;
  
  for (let i = 0; i < donors.length; i++) {
    let S = donors[i].transactionID;
    let hiddenID = S.slice(0, 4) + "XXXX" + S.slice(-3);
    donors[i].transactionID = hiddenID;
  }
}

// Show a campaign by ID
const show = async (req, res) => {
  try {
    const { id } = req.params;
    if (!id.match(/^[0-9a-fA-F]{24}$/)) {
      return res.status(404).json({ message: "Invalid Campaign ID format" });
    }

    const campaign = await db.Campaign.findById(id);
    if (!campaign) {
      return res.status(404).json({ message: "Campaign not found" });
    }

    hideTransactionID(campaign.donors);
    return res.status(200).json(campaign);
  } catch (error) {
    console.error("Error fetching campaign:", error);
    return res.status(500).json({ message: "Error fetching the campaign" });
  }
};

// Show all campaigns
const showAll = async (req, res) => {
  try {
    const campaigns = await db.Campaign.find({}).sort({ start: -1 });
    
    campaigns.forEach((campaign) => {
      hideTransactionID(campaign.donors);
    });

    return res.status(200).json(campaigns);
  } catch (error) {
    console.error("Error fetching all campaigns:", error);
    return res.status(500).json({ message: "Error fetching campaigns" });
  }
};

module.exports = {
  show,
  showAll,
};