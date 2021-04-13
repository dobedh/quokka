import Note from "../models/Note";

export const home = (req, res) => {
  res.render("home");
};

export const login = (req, res) => res.render("login");

export const join = (req, res) => res.render("join");

export const community = (req, res) => res.render("community");
