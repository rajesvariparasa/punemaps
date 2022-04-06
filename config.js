// config.js : Put all top-level configurations here

const STARTLOCATION = [18.51, 73.86]
const STARTZOOM = 10;

// map constraints - use this to ensure the user doesn't float off to other places
const BOUNDS = [[18.38, 73.63], [18.66, 74.04]];
const MINZOOM = 10;
const MAXZOOM = 20;
const MAXBOUNDSVISCOSITY = 0.5;

const SHAPES_FOLDER = 'data/';
const LAYERS_CSV = 'config/map_layers.csv';

// to make some layers visible by default when map loads, put "Y" under "default" column for them in the CSV.

// Print related
const ORIG_W = 1000;
const ORIG_H = 1450;

