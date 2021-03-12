const mapLayouts = [
  {
    name: 'MapInk',
    url: 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
    attributes:
      '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors',
  },
  {
    name: 'Black And White',
    url: 'https://tiles.wmflabs.org/bw-mapnik/{z}/{x}/{y}.png',
    attributes:
      '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors',
  },
  {
    name: 'Voyager',
    url:
      'https://{s}.basemaps.cartocdn.com/rastertiles/voyager_labels_under/{z}/{x}/{y}.png',
    attributes: '©OpenStreetMap, ©CartoDB',
    checked: true,
  },
  {
    name: 'Voyager W/O Labels',
    url:
      'https://{s}.basemaps.cartocdn.com/rastertiles/voyager_nolabels/{z}/{x}/{y}.png',
    attributes: '©OpenStreetMap, ©CartoDB',
  },
  {
    name: 'Dark Matter',
    url:
      'https://{s}.basemaps.cartocdn.com/rastertiles/dark_all/{z}/{x}/{y}.png',
    attributes: '©OpenStreetMap, ©CartoDB',
  },
  {
    name: 'Dark Matter W/O Labels',
    url:
      'https://{s}.basemaps.cartocdn.com/rastertiles/dark_nolabels/{z}/{x}/{y}.png',
    attributes: '©OpenStreetMap, ©CartoDB',
  },
  {
    name: 'Positron',
    url:
      'https://{s}.basemaps.cartocdn.com/rastertiles/light_all/{z}/{x}/{y}.png',
    attributes: '©OpenStreetMap, ©CartoDB',
  },
  {
    name: 'Positron W/O Labels',
    url:
      'https://{s}.basemaps.cartocdn.com/rastertiles/light_nolabels/{z}/{x}/{y}.png',
    attributes: '©OpenStreetMap, ©CartoDB',
  },
];

export { mapLayouts };
