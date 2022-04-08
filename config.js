// config.js : Put all top-level configurations here

const STARTLOCATION = [18.51, 73.86]
const STARTZOOM = 10;

// map constraints - use this to ensure the user doesn't float off to other places
const BOUNDS = [[18, 73], [19, 74]];
const MINZOOM = 5;
const MAXZOOM = 40;
const MAXBOUNDSVISCOSITY = 0.5;

const SHAPES_FOLDER = 'data/';
const LAYERS_CSV = 'config/map_layers.csv';

// to make some layers visible by default when map loads, put "Y" under "default" column for them in the CSV.

// Print related
const ORIG_W = 1000;
const ORIG_H = 1450;

