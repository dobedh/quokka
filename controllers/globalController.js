import Note from "../models/Note";

export const home = async (req, res) => {
  try {
    const notes = await Note.find({});
    console.log(notes);
    res.render("home", { notes });
  } catch (error) {
    console.log(error);
    res.render("home");
  }
};

export const login = (req, res) => res.render("login");

export const join = (req, res) => res.render("join");
