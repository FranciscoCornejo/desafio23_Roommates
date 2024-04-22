import {
  addRoommateQuery,
  getRoommatesQuery,
  recalcularDeudas,
} from "../querys/queryHabitantes.js";

const addRoommates = async (req, res) => {
  try {
    await addRoommateQuery();
    recalcularDeudas();
    res.redirect("/");
  } catch (error) {
    console.log(error);
  }
};

const getRoommates = async (req, res) => {
  try {
    const roommatesJson = await getRoommatesQuery();
    res.json(roommatesJson);
  } catch (error) {
    console.log(error);
  }
};

export { addRoommates, getRoommates };
