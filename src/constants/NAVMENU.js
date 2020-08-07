import React from "react";
import SearchIcon from "@material-ui/icons/Search";
import PictureAsPdfIcon from "@material-ui/icons/PictureAsPdf";
import CategoryIcon from "@material-ui/icons/Category";
export const NAVMENU = [
  { title: "Search", icon: <SearchIcon />, path: "/search" },
  { title: "Your PDFs", icon: <PictureAsPdfIcon />, path: "/pdfs" },
  { title: "Categories", icon: <CategoryIcon />, path: "categories" }
];
