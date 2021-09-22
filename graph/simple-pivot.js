var pivotA3 = new WebDataRocks({
    container: "#pivotA3",
    toolbar: true, //les boutons du bandeau de base sont masqués et remplacés par le bouton custom d'appel d'un csv local
    beforetoolbarcreated: customizeToolbar,
    report: {
			"dataSource": {
          "dataSourceType": "csv",
					"filename": "https://zw6072.github.io/depot_data/bloonet/sites_iris.csv" //seules les sources en ligne peuvent être lues, sauf à passer par le bouton d'appel d'un csv
      },
      "options": {
        "configuratorButton": false,
        "grid": {
            "showHeaders": false,
            "type": "flat", //flat est indispensable pour jouer des données textes et passer le pivot en table classique.
            "showGrandTotals": false,
        }
      },
      "tableSizes": {
        "columns": [
            {
            "idx": 0,
            "width": 120
            },
            {
            "idx": 1,
            "width": 120
            },
            {
            "idx": 2,
            "width": 120
            },
            {
            "idx": 3,
            "width": 120
            },
            {
            "idx": 4,
            "width": 120
            },
            {
            "idx": 5,
            "width": 120
            },
            {
            "idx": 6,
            "width": 120
            },
            {
            "idx": 7,
            "width": 120
            },
            {
            "idx": 8,
            "width": 120
            },
            {
            "idx": 9,
            "width": 120
            },
            {
            "idx": 10,
            "width": 120
            },
          ]
      },
			"slice": {
        "reportFilters": [
        ],
        "sorting": {
          "column": {
              "type": "asc",
              "measure": "fid"
            },
        },
				"columns": [
				],
				"rows": [
            {
						"uniqueName": "INSEE_COM",
            "caption": "Code postal"
            },
            {
            "uniqueName": "NOM_COM",
            "caption": "Commune",
            },
            {
            "uniqueName": "IRIS",
            "caption": "IRIS"
            },
            {
            "uniqueName": "CODE_IRIS",
            "caption": "CODE_IRIS"
            },
            {
            "uniqueName": "NOM_IRIS",
            "caption": "NOM_IRIS"
            },
            {
            "uniqueName": "TYP_IRIS",
            "caption": "TYP_IRIS"
            },
            {
            "uniqueName": "pop_cov",
            "caption": "FREE Surface (%)"
            },
            {
            "uniqueName": "area_cov",
            "caption": "FREE Population (%)"
            },
				],
				"measures": [
	 			]
			}
		},
    reportcomplete: function() {
      pivotA3.off("reportcomplete");
    }
});

function customizeToolbar(toolbar) {
    // get all tabs
    var tabs = toolbar.getTabs();
    toolbar.getTabs = function() {
        // There will be two new tabs at the beginning of the toolbar
        delete tabs[1];
        delete tabs[2];
        delete tabs[4];
        delete tabs[5];
        delete tabs[6];
        delete tabs[7];
        tabs.unshift({
            id: "wdr-tab-update",
            title: "Refresh",
            handler: newtabHandlerBlue,
            icon: this.icons.options
        });
        return tabs;
    }
    var newtabHandlerBlue = function() {
        updateDataCSV();
    };
}

function updateDataCSV() {
  webdatarocks.updateData({
    filename: 'https://zw6072.github.io/depot_data/free/bretagne_sites_simple.csv'
  });
}
