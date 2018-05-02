let aceptar_registro = [0,0,0,0,0,0];


let usuarios = (localStorage.getItem("usuarios") == null)?[]:JSON.parse(localStorage.getItem("usuarios"));


var departamentos = [
    {
        departamento_id: 1,
        nombre_depto: 'Petén'
    },
    {
        departamento_id: 2,
        nombre_depto: 'Izabal'
    },
    {
        departamento_id: 3,
        nombre_depto: 'Alta Verapaz'
    },
    {
        departamento_id: 4,
        nombre_depto: 'Quiché'
    },
    {
        departamento_id: 5,
        nombre_depto: 'Huehuetenango'
    },
    {
        departamento_id: 6,
        nombre_depto: 'Escuintla'
    },
    {
        departamento_id: 7,
        nombre_depto: 'San Marcos'
    },
    {
        departamento_id: 8,
        nombre_depto: 'Jutiapa'
    },
    {
        departamento_id: 9,
        nombre_depto: 'Baja Verapaz'
    },
    {
        departamento_id: 10,
        nombre_depto: 'Santa Rosa'
    },
    {
        departamento_id: 11,
        nombre_depto: 'Zacapa'
    },
    {
        departamento_id: 12,
        nombre_depto: 'Suchitepéquez'
    },
    {
        departamento_id: 13,
        nombre_depto: 'Chiquimula'
    },
    {
        departamento_id: 14,
        nombre_depto: 'Guatemala'
    },
    {
        departamento_id: 15,
        nombre_depto: 'Jalapa'
    },
    {
        departamento_id: 16,
        nombre_depto: 'Chimaltenango'
    },
    {
        departamento_id: 17,
        nombre_depto: 'Quetzaltenango'
    },
    {
        departamento_id: 18,
        nombre_depto: 'El Progreso'
    },
    {
        departamento_id: 19,
        nombre_depto: 'Retalhuleu'
    },
    {
        departamento_id: 20,
        nombre_depto: 'Sololá'
    },
    {
        departamento_id: 21,
        nombre_depto: 'Totonicapán'
    },
    {
        departamento_id: 22,
        nombre_depto: 'Sacatepéquez'
    }
];

var municipios = [
    {
        municipio_id: 1,
        nombre_muni: 'Flores',
        departamento_id: 1
    },
    {
        municipio_id: 2,
        nombre_muni: 'San José',
        departamento_id: 1
    },
    {
        municipio_id: 3,
        nombre_muni: 'San Benito ',
        departamento_id: 1
    },
    {
        municipio_id: 4,
        nombre_muni: 'San Andrés',
        departamento_id: 1
    },
    {
        municipio_id: 5,
        nombre_muni: 'La Libertad',
        departamento_id: 1
    },
    {
        municipio_id: 6,
        nombre_muni: 'San Francisco',
        departamento_id: 1
    },
    {
        municipio_id: 7,
        nombre_muni: 'Santa Ana',
        departamento_id: 1
    },
    {
        municipio_id: 8,
        nombre_muni: 'Dolores',
        departamento_id: 1
    },
    {
        municipio_id: 9,
        nombre_muni: 'San Luis',
        departamento_id: 1
    },
    {
        municipio_id: 10,
        nombre_muni: 'Sayaxche',
        departamento_id: 1
    },
    {
        municipio_id: 11,
        nombre_muni: 'Melchor de Mencos',
        departamento_id: 1
    },
    {
        municipio_id: 12,
        nombre_muni: 'Poptún',
        departamento_id: 1
    },
    {
        municipio_id: 13,
        nombre_muni: 'Puerto Barrios',
        departamento_id: 2
    },
    {
        municipio_id: 14,
        nombre_muni: 'Livingston',
        departamento_id: 2
    },
    {
        municipio_id: 15,
        nombre_muni: 'El Estor',
        departamento_id: 2
    },
    {
        municipio_id: 16,
        nombre_muni: 'Morales',
        departamento_id: 2
    },
    {
        municipio_id: 17,
        nombre_muni: 'Los Amates',
        departamento_id: 2
    },
    {
        municipio_id: 18,
        nombre_muni: 'Cobán',
        departamento_id: 3
    },
    {
        municipio_id: 19,
        nombre_muni: 'Santa Cruz Verapaz',
        departamento_id: 3
    },
    {
        municipio_id: 20,
        nombre_muni: 'San Cristobal Verapaz',
        departamento_id: 3
    },
    {
        municipio_id: 21,
        nombre_muni: 'Tactíc',
        departamento_id: 3
    },
    {
        municipio_id: 22,
        nombre_muni: 'Tamahú',
        departamento_id: 3
    },
    {
        municipio_id: 23,
        nombre_muni: 'San Miguel Tucurú',
        departamento_id: 3
    },
    {
        municipio_id: 24,
        nombre_muni: 'Panzos ',
        departamento_id: 3
    },
    {
        municipio_id: 25,
        nombre_muni: 'Senahú ',
        departamento_id: 3
    },
    {
        municipio_id: 26,
        nombre_muni: 'San Pedro Carchá',
        departamento_id: 3
    },
    {
        municipio_id: 27,
        nombre_muni: 'SanJuan Chamelco',
        departamento_id: 3
    },
    {
        municipio_id: 28,
        nombre_muni: 'Lanquín',
        departamento_id: 3
    },
    {
        municipio_id: 29,
        nombre_muni: 'Santa María Cahabón',
        departamento_id: 3
    },
    {
        municipio_id: 30,
        nombre_muni: 'Chisec',
        departamento_id: 3
    },
    {
        municipio_id: 31,
        nombre_muni: 'Chahal',
        departamento_id: 3
    },
    {
        municipio_id: 32,
        nombre_muni: 'Fray Bartolomé de las Casas',
        departamento_id: 3
    },
    {
        municipio_id: 33,
        nombre_muni: 'Santa Catarina La Tinta',
        departamento_id: 3
    }, 
    {
        municipio_id: 34,
        nombre_muni: 'Santa Cruz del Quiche',
        departamento_id: 4
    },
    {
        municipio_id: 35,
        nombre_muni: 'Chiche',
        departamento_id: 4
    },
    {
        municipio_id: 36,
        nombre_muni: 'Chinique',
        departamento_id: 4
    },
    {
        municipio_id: 37,
        nombre_muni: 'Zacualpa',
        departamento_id: 4
    },
    {
        municipio_id: 38,
        nombre_muni: 'Chajul',
        departamento_id: 4
    },
    {
        municipio_id: 39,
        nombre_muni: 'Santo Tomás Chichicstenango',
        departamento_id: 4
    },
    {
        municipio_id: 40,
        nombre_muni: 'Patzité',
        departamento_id: 4
    },
    {
        municipio_id: 41,
        nombre_muni: 'San Antonio Ilotenango',
        departamento_id: 4
    },
    {
        municipio_id: 42,
        nombre_muni: 'San Pedro Jocopilas',
        departamento_id: 4
    },
    {
        municipio_id: 43,
        nombre_muni: 'Cunén',
        departamento_id: 4
    },
    {
        municipio_id: 44,
        nombre_muni: 'San Juan Cotzal',
        departamento_id: 4
    },
    {
        municipio_id: 45,
        nombre_muni: 'Joyabaj',
        departamento_id: 4
    },
    {
        municipio_id: 46,
        nombre_muni: 'Santa María Nebaj',
        departamento_id: 4
    },
    {
        municipio_id: 47,
        nombre_muni: 'San Andrés Sajcabajá',
        departamento_id: 4
    },
    {
        municipio_id: 48,
        nombre_muni: 'San Miguel Uspatán',
        departamento_id: 4
    },
    {
        municipio_id: 49,
        nombre_muni: 'Sacapulas',
        departamento_id: 4
    },
    {
        municipio_id: 50,
        nombre_muni: 'San Bartolomé Jocotenango',
        departamento_id: 4
    },
    {
        municipio_id: 51,
        nombre_muni: 'Canilla',
        departamento_id: 4
    },
    {
        municipio_id: 52,
        nombre_muni: 'Chicaman',
        departamento_id: 4
    },
    {
        municipio_id: 53,
        nombre_muni: 'Playa Grande - Ixcán',
        departamento_id: 4
    },
    {
        municipio_id: 54,
        nombre_muni: 'Pachalúm',
        departamento_id: 4
    }, 
    {
        municipio_id: 55,
        nombre_muni: 'Huehuetenango',
        departamento_id: 5
    },
    {
        municipio_id: 56,
        nombre_muni: 'Chiantla',
        departamento_id: 5
    },
    {
        municipio_id: 57,
        nombre_muni: 'Malacatancito',
        departamento_id: 5
    },
    {
        municipio_id: 58,
        nombre_muni: 'Cuilco',
        departamento_id: 5
    },
    {
        municipio_id: 59,
        nombre_muni: 'Nentón',
        departamento_id: 5
    },
    {
        municipio_id: 60,
        nombre_muni: 'San Pedro Necta',
        departamento_id: 5
    },
    {
        municipio_id: 61,
        nombre_muni: 'Jacaltenango',
        departamento_id: 5
    },
    {
        municipio_id: 62,
        nombre_muni: 'San Pedro Soloma',
        departamento_id: 5
    },
    {
        municipio_id: 63,
        nombre_muni: 'San Ildelfonso Ixtahuac´n',
        departamento_id: 5
    },
    {
        municipio_id: 64,
        nombre_muni: 'Santa Bárbara',
        departamento_id: 5
    },
    {
        municipio_id: 65,
        nombre_muni: 'La Libertad',
        departamento_id: 5
    },
    {
        municipio_id: 66,
        nombre_muni: 'La Democracia',
        departamento_id: 5
    },
    {
        municipio_id: 67,
        nombre_muni: 'San Miguel Acatán',
        departamento_id: 5
    },
    {
        municipio_id: 68,
        nombre_muni: 'San Rafael La Independencia',
        departamento_id: 5
    },
    {
        municipio_id: 69,
        nombre_muni: 'Todos Santos Chuchcumatán',
        departamento_id: 5
    },
    {
        municipio_id: 70,
        nombre_muni: 'San Juan Atitán',
        departamento_id: 5
    },
    {
        municipio_id: 71,
        nombre_muni: 'Santa Eulalia',
        departamento_id: 5
    },
    {
        municipio_id: 72,
        nombre_muni: 'San Mateo Ixtatán',
        departamento_id: 5
    },
    {
        municipio_id: 73,
        nombre_muni: 'Colotenango',
        departamento_id: 5
    },
    {
        municipio_id: 74,
        nombre_muni: 'San Sebastián Huehuetenango',
        departamento_id: 5
    },
    {
        municipio_id: 75,
        nombre_muni: 'Tectitán',
        departamento_id: 5
    },
    {
        municipio_id: 76,
        nombre_muni: 'Concepción Huista',
        departamento_id: 5
    },
    {
        municipio_id: 77,
        nombre_muni: 'San Juan Ixcoy',
        departamento_id: 5
    },
    {
        municipio_id: 78,
        nombre_muni: 'San Antonio Huista',
        departamento_id: 5
    },
    {
        municipio_id: 79,
        nombre_muni: 'San Sebastián Coatán',
        departamento_id: 5
    },
    {
        municipio_id: 80,
        nombre_muni: 'Santa Cruz Barillas',
        departamento_id: 5
    },
    {
        municipio_id: 81,
        nombre_muni: 'Aguacatán',
        departamento_id: 5
    },
    {
        municipio_id: 82,
        nombre_muni: 'San Rafael Petzal',
        departamento_id: 5
    },
    {
        municipio_id: 83,
        nombre_muni: 'San Gaspar Ixchil',
        departamento_id: 5
    },
    {
        municipio_id: 84,
        nombre_muni: 'Santiago Chimaltenango',
        departamento_id: 5
    },
    {
        municipio_id: 85,
        nombre_muni: 'Santa Ana Huista',
        departamento_id: 5
    },
    {
        municipio_id: 86,
        nombre_muni: 'Escuintla',
        departamento_id: 6
    },
    {
        municipio_id: 87,
        nombre_muni: 'Santa Lucía Cotzumalguapa',
        departamento_id: 6
    },
    {
        municipio_id: 88,
        nombre_muni: 'La Democracia',
        departamento_id: 6
    },
    {
        municipio_id: 89,
        nombre_muni: 'Siquinalá',
        departamento_id: 6
    },
    {
        municipio_id: 90,
        nombre_muni: 'Masagua',
        departamento_id: 6
    },
    {
        municipio_id: 91,
        nombre_muni: 'Pueblo Nuevo Tiquisate',
        departamento_id: 6
    },
    {
        municipio_id: 92,
        nombre_muni: 'La Gomera',
        departamento_id: 6
    },
    {
        municipio_id: 93,
        nombre_muni: 'Guanagazapa',
        departamento_id: 6
    },
    {
        municipio_id: 94,
        nombre_muni: 'Puerto de San José',
        departamento_id: 6
    },
    {
        municipio_id: 95,
        nombre_muni: 'Iztapa',
        departamento_id: 6
    },
    {
        municipio_id: 96,
        nombre_muni: 'Palín',
        departamento_id: 6
    },
    {
        municipio_id: 97,
        nombre_muni: 'San Vicente Pacaya',
        departamento_id: 6
    },
    {
        municipio_id: 98,
        nombre_muni: 'Nueva Concepción',
        departamento_id: 6
    },
    {
        municipio_id: 99,
        nombre_muni: 'San Marcos',
        departamento_id: 7
    },
    {
        municipio_id: 100,
        nombre_muni: 'San Pedro Sacatepéquez',
        departamento_id: 7
    },
    {
        municipio_id: 101,
        nombre_muni: 'Comitancillo',
        departamento_id: 7
    },
    {
        municipio_id: 102,
        nombre_muni: 'San Antonio Sacatepéquez',
        departamento_id: 7
    },
    {
        municipio_id: 103,
        nombre_muni: 'San Miguel Ixtahuacan',
        departamento_id: 7
    },
    {
        municipio_id: 104,
        nombre_muni: 'Concepción Tutuapa',
        departamento_id: 7
    },
    {
        municipio_id: 105,
        nombre_muni: 'Tacaná',
        departamento_id: 7
    },
    {
        municipio_id: 106,
        nombre_muni: 'Sibinal',
        departamento_id: 7
    },
    {
        municipio_id: 107,
        nombre_muni: 'Tajumulco',
        departamento_id: 7
    },
    {
        municipio_id: 108,
        nombre_muni: 'Tejutla',
        departamento_id: 7
    },
    {
        municipio_id: 109,
        nombre_muni: 'San Rafael Pié de la Cuesta',
        departamento_id: 7
    },
    {
        municipio_id: 110,
        nombre_muni: 'Nuevo Progreso',
        departamento_id: 7
    },
    {
        municipio_id: 111,
        nombre_muni: 'El Tumbador',
        departamento_id: 7
    },
    {
        municipio_id: 112,
        nombre_muni: 'San José El Rodeo',
        departamento_id: 7
    },
    {
        municipio_id: 113,
        nombre_muni: 'Malacatán',
        departamento_id: 7
    },
    {
        municipio_id: 114,
        nombre_muni: 'Catarina',
        departamento_id: 7
    },
    {
        municipio_id: 115,
        nombre_muni: 'Ayutla',
        departamento_id: 7
    },
    {
        municipio_id: 116,
        nombre_muni: 'Ocos',
        departamento_id: 7
    },
    {
        municipio_id: 117,
        nombre_muni: 'San Pablo',
        departamento_id: 7
    },
    {
        municipio_id: 118,
        nombre_muni: 'El Quetzal',
        departamento_id: 7
    },
    {
        municipio_id: 119,
        nombre_muni: 'La Reforma',
        departamento_id: 7
    },
    {
        municipio_id: 120,
        nombre_muni: 'Pajapita',
        departamento_id: 7
    },
    {
        municipio_id: 121,
        nombre_muni: 'Ixchiguan',
        departamento_id: 7
    },
    {
        municipio_id: 122,
        nombre_muni: 'San José Ojetenán',
        departamento_id: 7
    },
    {
        municipio_id: 123,
        nombre_muni: 'San Cristóbal Cucho',
        departamento_id: 7
    },
    {
        municipio_id: 124,
        nombre_muni: 'Sipacapa',
        departamento_id: 7
    },
    {
        municipio_id: 125,
        nombre_muni: 'Esquipulas Palo Gordo',
        departamento_id: 7
    },
    {
        municipio_id: 126,
        nombre_muni: 'Río Blanco',
        departamento_id: 7
    },
    {
        municipio_id: 127,
        nombre_muni: 'San Lorenzo',
        departamento_id: 7
    },
    // Municipios de Jutiapa
    {
        municipio_id: 128,
        nombre_muni: 'Jutiapa',
        departamento_id: 8
    },
    {
        municipio_id: 129,
        nombre_muni: 'El Progreso',
        departamento_id: 8
    },
    {
        municipio_id: 130,
        nombre_muni: 'Santa Catarina Mita',
        departamento_id: 8
    },
    {
        municipio_id: 131,
        nombre_muni: 'Agua Blanca',
        departamento_id: 8
    },
    {
        municipio_id: 132,
        nombre_muni: 'Asunción Mita',
        departamento_id: 8
    },
    {
        municipio_id: 133,
        nombre_muni: 'Yupiltepeque',
        departamento_id: 8
    },
    {
        municipio_id: 134,
        nombre_muni: 'Atescatempa',
        departamento_id: 8
    },
    {
        municipio_id: 135,
        nombre_muni: 'Jerez',
        departamento_id: 8
    },
    {
        municipio_id: 136,
        nombre_muni: 'El Adelanto',
        departamento_id: 8
    },
    {
        municipio_id: 137,
        nombre_muni: 'Zapotitlán',
        departamento_id: 8
    },
    {
        municipio_id: 138,
        nombre_muni: 'Comapa',
        departamento_id: 8
    },
    {
        municipio_id: 139,
        nombre_muni: 'Jalpatagua',
        departamento_id: 8
    },
    {
        municipio_id: 140,
        nombre_muni: 'Conguaco',
        departamento_id: 8
    },
    {
        municipio_id: 141,
        nombre_muni: 'Moyuta',
        departamento_id: 8
    },
    {
        municipio_id: 142,
        nombre_muni: 'Pasaco',
        departamento_id: 8
    },
    {
        municipio_id: 143,
        nombre_muni: 'San José Acatempa',
        departamento_id: 8
    },
    {
        municipio_id: 144,
        nombre_muni: 'Quezada',
        departamento_id: 8
    },
    {
        municipio_id: 145,
        nombre_muni: 'Salamá',
        departamento_id: 9
    },
    {
        municipio_id: 146,
        nombre_muni: 'San Miguel Chicaj',
        departamento_id: 9
    },
    {
        municipio_id: 147,
        nombre_muni: 'Rabinal',
        departamento_id: 9
    },
    {
        municipio_id: 148,
        nombre_muni: 'Cubulco',
        departamento_id: 9
    },
    {
        municipio_id: 149,
        nombre_muni: 'Granados',
        departamento_id: 9
    },
    {
        municipio_id: 150,
        nombre_muni: 'Santa Cruz El Chol',
        departamento_id: 9
    },
    {
        municipio_id: 151,
        nombre_muni: 'San Jerónimo',
        departamento_id: 9
    },
    {
        municipio_id: 152,
        nombre_muni: 'Purulhá',
        departamento_id: 9
    },
    {
        municipio_id: 153,
        nombre_muni: 'Cuilapa',
        departamento_id: 10
    },
    {
        municipio_id: 154,
        nombre_muni: 'Berberena',
        departamento_id: 10
    },
    {
        municipio_id: 155,
        nombre_muni: 'San Rosa de Lima',
        departamento_id: 10
    },
    {
        municipio_id: 156,
        nombre_muni: 'Casillas',
        departamento_id: 10
    },
    {
        municipio_id: 157,
        nombre_muni: 'San Rafael Las Flores',
        departamento_id: 10
    },
    {
        municipio_id: 158,
        nombre_muni: 'Oratorio',
        departamento_id: 10
    },
    {
        municipio_id: 159,
        nombre_muni: 'San Juan Tecuaco',
        departamento_id: 10
    },
    {
        municipio_id: 160,
        nombre_muni: 'Chiquimulilla',
        departamento_id: 10
    },
    {
        municipio_id: 161,
        nombre_muni: 'Taxisco',
        departamento_id: 10
    },
    {
        municipio_id: 162,
        nombre_muni: 'Santa María Ixhuatan',
        departamento_id: 10
    },
    {
        municipio_id: 163,
        nombre_muni: 'Guazacapán',
        departamento_id: 10
    },
    {
        municipio_id: 164,
        nombre_muni: 'Santa Cruz Naranjo',
        departamento_id: 10
    },
    {
        municipio_id: 165,
        nombre_muni: 'Pueblo Nuevo Viñas',
        departamento_id: 10
    },
    {
        municipio_id: 166,
        nombre_muni: 'Nueva Santa Rosa',
        departamento_id: 10
    },
    {
        municipio_id: 167,
        nombre_muni: 'Zacapa',
        departamento_id: 11
    },
    {
        municipio_id: 168,
        nombre_muni: 'Estanzuela',
        departamento_id: 11
    },
    {
        municipio_id: 169,
        nombre_muni: 'Río Hondo',
        departamento_id: 11
    },
    {
        municipio_id: 170,
        nombre_muni: 'Gualán',
        departamento_id: 11
    },
    {
        municipio_id: 171,
        nombre_muni: 'Teculután',
        departamento_id: 11
    },
    {
        municipio_id: 172,
        nombre_muni: 'Usumatlán',
        departamento_id: 11
    },
    {
        municipio_id: 173,
        nombre_muni: 'Cabañas',
        departamento_id: 11
    },
    {
        municipio_id: 174,
        nombre_muni: 'San Diego',
        departamento_id: 11
    },
    {
        municipio_id: 175,
        nombre_muni: 'La Unión',
        departamento_id: 11
    },
    {
        municipio_id: 176,
        nombre_muni: 'Huite',
        departamento_id: 11
    },
    {
        municipio_id: 177,
        nombre_muni: 'Mazatenango',
        departamento_id: 12
    },
    {
        municipio_id: 178,
        nombre_muni: 'Cuyotenango',
        departamento_id: 12
    },
    {
        municipio_id: 179,
        nombre_muni: 'San Francisco Zapotitlán',
        departamento_id: 12
    },
    {
        municipio_id: 180,
        nombre_muni: 'San Bernardino',
        departamento_id: 12
    },
    {
        municipio_id: 181,
        nombre_muni: 'San José El Ídolo',
        departamento_id: 12
    },
    {
        municipio_id: 182,
        nombre_muni: 'Santo Domingo Suchitepequez',
        departamento_id: 12
    },
    {
        municipio_id: 183,
        nombre_muni: 'San Lorenzo',
        departamento_id: 12
    },
    {
        municipio_id: 184,
        nombre_muni: 'Samayac',
        departamento_id: 12
    },
    {
        municipio_id: 185,
        nombre_muni: 'San Pablo Jocopilas',
        departamento_id: 12
    },
    {
        municipio_id: 186,
        nombre_muni: 'San Antonio Suchitepéquez',
        departamento_id: 12
    },
    {
        municipio_id: 187,
        nombre_muni: 'San Miguel Panán',
        departamento_id: 12
    },
    {
        municipio_id: 188,
        nombre_muni: 'San Gabriel',
        departamento_id: 12
    },
    {
        municipio_id: 189,
        nombre_muni: 'Chicacao',
        departamento_id: 12
    },
    {
        municipio_id: 190,
        nombre_muni: 'Patulul',
        departamento_id: 12
    },
    {
        municipio_id: 191,
        nombre_muni: 'Santa Bárbara',
        departamento_id: 12
    },
    {
        municipio_id: 192,
        nombre_muni: 'San Juan Bautista',
        departamento_id: 12
    },
    {
        municipio_id: 193,
        nombre_muni: 'Santo Tomás La Unión',
        departamento_id: 12
    },
    {
        municipio_id: 194,
        nombre_muni: 'Zunilito',
        departamento_id: 12
    },
    {
        municipio_id: 195,
        nombre_muni: 'Pueblo Nuevo Suchitepéque',
        departamento_id: 12
    },
    {
        municipio_id: 196,
        nombre_muni: 'Río Bravo',
        departamento_id: 12
    },
    {
        municipio_id: 197,
        nombre_muni: 'Chiquimula',
        departamento_id: 13
    },
    {
        municipio_id: 198,
        nombre_muni: 'San José La Arada',
        departamento_id: 13
    },
    {
        municipio_id: 199,
        nombre_muni: 'San Juan Hermita',
        departamento_id: 13
    },
    {
        municipio_id: 200,
        nombre_muni: 'Jocotán',
        departamento_id: 13
    },
    {
        municipio_id: 201,
        nombre_muni: 'Camotán',
        departamento_id: 13
    },
    {
        municipio_id: 202,
        nombre_muni: 'Olopa',
        departamento_id: 13
    },
    {
        municipio_id: 203,
        nombre_muni: 'Esquipulas',
        departamento_id: 13
    },
    {
        municipio_id: 204,
        nombre_muni: 'Concepción Las Minas',
        departamento_id: 13
    },
    {
        municipio_id: 205,
        nombre_muni: 'Quezaltepeque',
        departamento_id: 13
    },
    {
        municipio_id: 206,
        nombre_muni: 'San Jacinto',
        departamento_id: 13
    },
    {
        municipio_id: 207,
        nombre_muni: 'Ipala',
        departamento_id: 13
    },
    {
        municipio_id: 208,
        nombre_muni: 'Guatemala',
        departamento_id: 14
    },
    {
        municipio_id: 209,
        nombre_muni: 'Santa Catarina Pinula',
        departamento_id: 14
    },
    {
        municipio_id: 210,
        nombre_muni: 'San José Pinula',
        departamento_id: 14
    },
    {
        municipio_id: 211,
        nombre_muni: 'San José del Golfo',
        departamento_id: 14
    },
    {
        municipio_id: 212,
        nombre_muni: 'Palencia',
        departamento_id: 14
    },
    {
        municipio_id: 213,
        nombre_muni: 'Chinautla',
        departamento_id: 14
    },
    {
        municipio_id: 214,
        nombre_muni: 'San Pedro Ayampuc',
        departamento_id: 14
    },
    {
        municipio_id: 215,
        nombre_muni: 'Mixco',
        departamento_id: 14
    },
    {
        municipio_id: 216,
        nombre_muni: 'San Pedro Sacatepequez',
        departamento_id: 14
    },
    {
        municipio_id: 217,
        nombre_muni: 'San Juan Sacatepequez',
        departamento_id: 14
    },
    {
        municipio_id: 218,
        nombre_muni: 'San Raymundo',
        departamento_id: 14
    },
    {
        municipio_id: 219,
        nombre_muni: 'Chuarrancho',
        departamento_id: 14
    },
    {
        municipio_id: 220,
        nombre_muni: 'Fraijanes',
        departamento_id: 14
    },
    {
        municipio_id: 221,
        nombre_muni: 'Amatitlán',
        departamento_id: 14
    },
    {
        municipio_id: 222,
        nombre_muni: 'Villa Nueva',
        departamento_id: 14
    },
    {
        municipio_id: 223,
        nombre_muni: 'Villa Canales',
        departamento_id: 14
    },
    {
        municipio_id: 224,
        nombre_muni: 'San Miguel Petapa',
        departamento_id: 14
    },
    // Municipios de Jalapa
    {
        municipio_id: 225,
        nombre_muni: 'Jalapa',
        departamento_id: 15
    },
    {
        municipio_id: 226,
        nombre_muni: 'San Pedro Pinula',
        departamento_id: 15
    },
    {
        municipio_id: 227,
        nombre_muni: 'San Luis Jilotepeque',
        departamento_id: 15
    },
    {
        municipio_id: 228,
        nombre_muni: 'San Manuel Chaparrón',
        departamento_id: 15
    },
    {
        municipio_id: 229,
        nombre_muni: 'San Carlos Alzatate',
        departamento_id: 15
    },
    {
        municipio_id: 230,
        nombre_muni: 'Monjas',
        departamento_id: 15
    },
    {
        municipio_id: 231,
        nombre_muni: 'Mataquescuintla',
        departamento_id: 15
    },
    {
        municipio_id: 232,
        nombre_muni: 'Chimaltenango',
        departamento_id: 16
    },
    {
        municipio_id: 233,
        nombre_muni: 'San José Poaquil',
        departamento_id: 16
    },
    {
        municipio_id: 234,
        nombre_muni: 'San Martín Jilotepeque',
        departamento_id: 16
    },
    {
        municipio_id: 235,
        nombre_muni: 'San Juan Comalapa',
        departamento_id: 16
    },
    {
        municipio_id: 236,
        nombre_muni: 'Santa Apolonia',
        departamento_id: 16
    },
    {
        municipio_id: 237,
        nombre_muni: 'Tecpán Guatemala',
        departamento_id: 16
    },
    {
        municipio_id: 238,
        nombre_muni: 'Patzun',
        departamento_id: 16
    },
    {
        municipio_id: 239,
        nombre_muni: 'San Miguel Pochuta',
        departamento_id: 16
    },
    {
        municipio_id: 240,
        nombre_muni: 'Patzicia',
        departamento_id: 16
    },
    {
        municipio_id: 241,
        nombre_muni: 'Santa Cruz Balanyá',
        departamento_id: 16
    },
    {
        municipio_id: 242,
        nombre_muni: 'Acatenango',
        departamento_id: 16
    },
    {
        municipio_id: 243,
        nombre_muni: 'San Pedro Yepocapa',
        departamento_id: 16
    },
    {
        municipio_id: 244,
        nombre_muni: 'San Andrés Itzapa',
        departamento_id: 16
    },
    {
        municipio_id: 245,
        nombre_muni: 'Parramos',
        departamento_id: 16
    },
    {
        municipio_id: 246,
        nombre_muni: 'Zaragoza',
        departamento_id: 16
    },
    {
        municipio_id: 247,
        nombre_muni: 'El Tejar',
        departamento_id: 16
    },
    {
        municipio_id: 248,
        nombre_muni: 'Quetzaltenango',
        departamento_id: 17
    },
    {
        municipio_id: 249,
        nombre_muni: 'Salcajá',
        departamento_id: 17
    },
    {
        municipio_id: 250,
        nombre_muni: 'Olintepeque',
        departamento_id: 17
    },
    {
        municipio_id: 251,
        nombre_muni: 'San Carlos Sija',
        departamento_id: 17
    },
    {
        municipio_id: 252,
        nombre_muni: 'Sibilia',
        departamento_id: 17
    },
    {
        municipio_id: 253,
        nombre_muni: 'Cabrican',
        departamento_id: 17
    },
    {
        municipio_id: 254,
        nombre_muni: 'Cajola',
        departamento_id: 17
    },
    {
        municipio_id: 255,
        nombre_muni: 'San Miguel Siguilça',
        departamento_id: 17
    },
    {
        municipio_id: 256,
        nombre_muni: 'San Juan Ostuncalco',
        departamento_id: 17
    },
    {
        municipio_id: 257,
        nombre_muni: 'San Mateo',
        departamento_id: 17
    },
    {
        municipio_id: 258,
        nombre_muni: 'Concepción Chiquirichapa',
        departamento_id: 17
    },
    {
        municipio_id: 259,
        nombre_muni: 'San Martín Sacatepequez',
        departamento_id: 17
    },
    {
        municipio_id: 260,
        nombre_muni: 'Almolonga',
        departamento_id: 17
    },
    {
        municipio_id: 261,
        nombre_muni: 'Cantel',
        departamento_id: 17
    },
    {
        municipio_id: 262,
        nombre_muni: 'Huitán',
        departamento_id: 17
    },
    {
        municipio_id: 263,
        nombre_muni: 'Zunil',
        departamento_id: 17
    },
    {
        municipio_id: 264,
        nombre_muni: 'Colomba',
        departamento_id: 17
    },
    {
        municipio_id: 265,
        nombre_muni: 'San Francisco La Unión',
        departamento_id: 17
    },
    {
        municipio_id: 266,
        nombre_muni: 'Coatepeque',
        departamento_id: 17
    },
    {
        municipio_id: 267,
        nombre_muni: 'Génova',
        departamento_id: 17
    },
    {
        municipio_id: 268,
        nombre_muni: 'Flores Costa Cuca',
        departamento_id: 17
    },
    {
        municipio_id: 269,
        nombre_muni: 'La Esperanza',
        departamento_id: 17
    },
    {
        municipio_id: 270,
        nombre_muni: 'Palestina de los Altos',
        departamento_id: 17
    },
    {
        municipio_id: 271,
        nombre_muni: 'Guastatoya',
        departamento_id: 18
    },
    {
        municipio_id: 272,
        nombre_muni: 'Morazán',
        departamento_id: 18
    },
    {
        municipio_id: 273,
        nombre_muni: 'San Agustín Acasaguastlan',
        departamento_id: 18
    },
    {
        municipio_id: 274,
        nombre_muni: 'San Cristóbal Acasaguastla',
        departamento_id: 18
    },
    {
        municipio_id: 275,
        nombre_muni: 'El Jícaro',
        departamento_id: 18
    },
    {
        municipio_id: 276,
        nombre_muni: 'Sansare',
        departamento_id: 18
    },
    {
        municipio_id: 277,
        nombre_muni: 'Sanarate',
        departamento_id: 18
    },
    {
        municipio_id: 278,
        nombre_muni: 'San Antonio La Paz',
        departamento_id: 18
    },
    {
        municipio_id: 279,
        nombre_muni: 'Retalhuelu',
        departamento_id: 19
    },
    {
        municipio_id: 280,
        nombre_muni: 'San Sebastián',
        departamento_id: 19
    },
    {
        municipio_id: 281,
        nombre_muni: 'Santa Cruz Mulúa',
        departamento_id: 19
    },
    {
        municipio_id: 282,
        nombre_muni: 'San Martín Zapotitlán',
        departamento_id: 19
    },
    {
        municipio_id: 283,
        nombre_muni: 'San Felipe Retalhuleu',
        departamento_id: 19
    },
    {
        municipio_id: 284,
        nombre_muni: 'San  Andrés Villa Seca',
        departamento_id: 19
    },
    {
        municipio_id: 285,
        nombre_muni: 'Champerico',
        departamento_id: 19
    },
    {
        municipio_id: 286,
        nombre_muni: 'Nuevo San Carlos',
        departamento_id: 19
    },
    {
        municipio_id: 287,
        nombre_muni: 'El Asintal',
        departamento_id: 19
    },
    // Municipios de Sololá
    {
        municipio_id: 288,
        nombre_muni: 'Sololá',
        departamento_id: 20
    },
    {
        municipio_id: 289,
        nombre_muni: 'San José Chacaya',
        departamento_id: 20
    },
    {
        municipio_id: 290,
        nombre_muni: 'Santa María Visitación',
        departamento_id: 20
    },
    {
        municipio_id: 291,
        nombre_muni: 'Santa Lucía Utatlán',
        departamento_id: 20
    },
    {
        municipio_id: 292,
        nombre_muni: 'Nahualá',
        departamento_id: 20
    },
    {
        municipio_id: 293,
        nombre_muni: 'Santa Catarina Ixtahuacán',
        departamento_id: 20
    },
    {
        municipio_id: 294,
        nombre_muni: 'Santa Clara La Laguna',
        departamento_id: 20
    },
    {
        municipio_id: 295,
        nombre_muni: 'Concepción',
        departamento_id: 20
    },
    {
        municipio_id: 296,
        nombre_muni: 'San Andrés Semetabaj',
        departamento_id: 20
    },
    {
        municipio_id: 297,
        nombre_muni: 'Panajachel',
        departamento_id: 20
    },
    {
        municipio_id: 298,
        nombre_muni: 'Santa Catarina Palopó',
        departamento_id: 20
    },
    {
        municipio_id: 299,
        nombre_muni: 'San Antonio Palopó',
        departamento_id: 20
    },
    {
        municipio_id: 300,
        nombre_muni: 'San Lucas Tolimán',
        departamento_id: 20
    },
    {
        municipio_id: 301,
        nombre_muni: 'Santa Cruz La Laguna',
        departamento_id: 20
    },
    {
        municipio_id: 302,
        nombre_muni: 'San Pablo La Laguna',
        departamento_id: 20
    },
    {
        municipio_id: 303,
        nombre_muni: 'San Marcos La Laguna',
        departamento_id: 20
    },
    {
        municipio_id: 304,
        nombre_muni: 'San Juan La Laguna',
        departamento_id: 20
    },
    {
        municipio_id: 305,
        nombre_muni: 'San Pedro La Laguna',
        departamento_id: 20
    },
    {
        municipio_id: 306,
        nombre_muni: 'Santiago Atitlán',
        departamento_id: 20
    },
    {
        municipio_id: 307,
        nombre_muni: 'Totonicapán',
        departamento_id: 21
    },
    {
        municipio_id: 308,
        nombre_muni: 'San Cristóbal Totonicapán',
        departamento_id: 21
    },
    {
        municipio_id: 309,
        nombre_muni: 'San Francisco El Alto',
        departamento_id: 21
    },
    {
        municipio_id: 310,
        nombre_muni: 'San Andrés Xecul',
        departamento_id: 21
    },
    {
        municipio_id: 311,
        nombre_muni: 'Momostenango',
        departamento_id: 21
    },
    {
        municipio_id: 312,
        nombre_muni: 'Santa María Chiquimula',
        departamento_id: 21
    },
    {
        municipio_id: 313,
        nombre_muni: 'Santa Lucía La Reforma',
        departamento_id: 21
    },
    {
        municipio_id: 314,
        nombre_muni: 'San Bartolo Aguas Calientes',
        departamento_id: 21
    },
    // Municipios de Sacatepéquez
    {
        municipio_id: 315,
        nombre_muni: 'Antigua Guatemala',
        departamento_id: 22
    },
    {
        municipio_id: 316,
        nombre_muni: 'Jocotenango',
        departamento_id: 22
    },
    {
        municipio_id: 317,
        nombre_muni: 'Pastores',
        departamento_id: 22
    },
    {
        municipio_id: 318,
        nombre_muni: 'Sumpango',
        departamento_id: 22
    },
    {
        municipio_id: 319,
        nombre_muni: 'Santo Domingo Xenacoj',
        departamento_id: 22
    },
    {
        municipio_id: 320,
        nombre_muni: 'Santiago Sacatepequez',
        departamento_id: 22
    },
    {
        municipio_id: 321,
        nombre_muni: 'San Bartolomé Milpas Altas',
        departamento_id: 22
    },
    {
        municipio_id: 322,
        nombre_muni: 'San Lucas Sacatepequez',
        departamento_id: 22
    },
    {
        municipio_id: 323,
        nombre_muni: 'Santa Lucía Milpas Altas',
        departamento_id: 22
    },
    {
        municipio_id: 324,
        nombre_muni: 'Magdalena Milpas Altas',
        departamento_id: 22
    },
    {
        municipio_id: 325,
        nombre_muni: 'Santa María de Jesús',
        departamento_id: 22
    },
    {
        municipio_id: 326,
        nombre_muni: 'Ciudad Vieja',
        departamento_id: 22
    },
    {
        municipio_id: 327,
        nombre_muni: 'San Miguel Dueñas',
        departamento_id: 22
    },
    {
        municipio_id: 328,
        nombre_muni: 'San Juan Alotenango',
        departamento_id: 22
    },
    {
        municipio_id: 329,
        nombre_muni: 'San Antonio Aguas Calientes',
        departamento_id: 22
    },
    {
        municipio_id: 330,
        nombre_muni: 'Santa Catarina Barahona',
        departamento_id: 22
    }
];

var depto = "";
var muni = ""; 

    
$.each(departamentos, function(index, valor){
    depto += '<option value="'+departamentos[index].departamento_id+'">'+departamentos[index].nombre_depto+'</option>';
});

$('#sl_dept').html(depto);

let departamento = $('#sl_dept').val();
    
$.each(municipios, function(index, valor){
    if(departamento == municipios[index].departamento_id){
        muni += '<option value="'+municipios[index].municipio_id+'">'+municipios[index].nombre_muni+'</option>';
    }
});
$('#sl_muni').html(muni);

$("#sl_dept").on("change", function(){

    let departamento = $('#sl_dept').val();
    var muni = "";
    $.each(municipios, function(index, valor){
        if(departamento == municipios[index].departamento_id){
            muni += '<option value="'+municipios[index].municipio_id+'">'+municipios[index].nombre_muni+'</option>';
        }
    });
    $('#sl_muni').html(muni);
});


$("#btn_cterminos").on('click',function(){
    $(".terminos").fadeToggle(200);
});

$("#hterminos").on('click',function(){
    $(".terminos").fadeToggle(200);
});


function Validartelefono(e) {
    if (($(e).val()).length < 8) {
        alert("El telefono debe tener 8 digitos");
        aceptar_registro[0] = 0;
    }else{
        aceptar_registro[0] = 1;
    }
}

function Validarform(event,t) {
    let tecla = (document.all)?event.keyCode:event.which;

    switch(t){
        case 0: 
            if(tecla == 8 || tecla == 32){
                return true;
            }else{
                var patron = /^[A-Za-z]+$/;
            }
            break;
        case 1: 
            if(tecla == 8){
                return true;
            }else{
                var patron = /[0-9]/;
            }
            break;
    }
    let tecla_final = String.fromCharCode(tecla);
    return patron.test(tecla_final);
}

function Validarcorreo() {
    if ((/^[A-Za-z0-9\.-]+\w+@[a-zA-Z]{2,8}\.[a-zA-Z0-9]{2,4}$/).test($("#txt_correo").val()) == false) {
        $("#p_correo").show();
        aceptar_registro[1] = 0;
    }else{
        $("#p_correo").hide();
        aceptar_registro[1] = 1;
    }
}

function Validarcontra() {
    let contra = $("#txt_contra").val();

    if (contra.length > 6) {
        if  ((/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@!%*?&])([A-Za-z\d$@!%*?&]|[^ ]){8,16}$/).test(contra)) {
            aceptar_registro[2] = 1;
        }else{
            alert("La contraseña debe tener al menos 2 mayusculas, 2 minusculas, 1 numero, 1 simbolo");
            aceptar_registro[2] = 0;
        }
    }else{
        alert("La contraseña debe tener minimo 8 digitos");
        aceptar_registro[2] = 0;
    }
}

function Concontra() {
    let contra = $("#txt_contra").val();
    let concontra = $("#txt_concontra").val();

    if (contra != concontra) {
        $("#concontra").show();
        aceptar_registro[3] = 0;
    }else{
        $("#concontra").hide();
        aceptar_registro[3] = 1;
    }
}

function Validarcui() {
    if (($("#txt_cui").val()).length < 13 || ($("#txt_cui").val()).length > 13) {
        $("#p_cui").show();
        aceptar_registro[4] = 0;
    }else{
        $("#p_cui").hide();
        aceptar_registro[4] = 1;
    }
}

function Validarfecha(e) {

    var fecha_hoy = new Date();

    if ($(e).val() == "") {
        alert("Debes completar la fecha de nacimiento");
        aceptar_registro[5] = 0;
    }else{
        let fecha_usr = ($(e).val()).split("-");
        let edad_anio = Number(fecha_hoy.getFullYear()) - Number(fecha_usr[0]);
        let mayor_edad = false;
    
        if(edad_anio > 18){
            mayor_edad = true;
            aceptar_registro[5] = 1;
            $("#chk_tutores").prop("disabled", true);
        }else if(edad_anio == 18 && fecha_usr[1] <= fecha_hoy.getMonth()+1 && fecha_usr[2] <= fecha_hoy.getDate()){
            mayor_edad = true;
            $("#chk_tutores").prop("disabled", true);
            aceptar_registro[5] = 1;
        }else{
            mayor_edad = false;
            $("#chk_tutores").prop("disabled", false);
            aceptar_registro[5] = 0;
        }
    }
}


var imagen;

function handleFileSelect(evt) {
    let files = evt.target.files;

    for (var i = 0; f = files[i]; i++) {

      if (!f.type.match('image.*')) {
        continue;
      }

      var reader = new FileReader();

      reader.onload = (function(theFile) {
        return function(e) {
          $("#list").children().remove();
          span = document.createElement('span');
          
          imagen = e.target.result;

          span.innerHTML = ['<img style="width: 72px; height 72px; border-radius: 50%;" class="thumb" src="', imagen,
                            '" title="', theFile.name, '"/>'].join('');
          document.getElementById('list').insertBefore(span, null);
        };
      })(f);

      reader.readAsDataURL(f);
    }
  }

  document.getElementById('files').addEventListener('change', handleFileSelect, false);

$("#btn_registrar").on("click",function(){

    if (aceptar_registro[0] == 1 && aceptar_registro[1] == 1 && aceptar_registro[2] == 1 && aceptar_registro[3] == 1 && aceptar_registro[4] == 1 && aceptar_registro[5] == 1) {
        
        let nombre = $("#txt_nombre").val();
        let apellido = $("#txt_apellido").val();
        let direccion = $("#txt_direccion").val();
        let telefono = $("#txt_tel").val();
        let correo = $("#txt_correo").val();
        let contra = $("#txt_contra").val();
        let zona = $("#txt_zona").val();
        let instituto = $("#txt_edu").val();
        let genero = $("input:radio[name=rad_genero]:checked").prop("id");

        let nacimiento = $("#txt_fecha").val();
        let cui = $("#txt_cui").val();
        let municipio = $("#sl_muni").prop("value");
        let educacion = $("#sl_escolaridad").val();

        if (genero == "rad_fem") {
            genero = "femenino";
        }else if (genero == "rad_mas"){
            genero = "masculino";
        }

        usuarios[usuarios.length] = {
                usuarios_id: usuarios.length+1,
                nombre: nombre, 
                apellido: apellido,
                direccion: direccion,
                telefono: telefono,
                correo: correo,
                contra: contra,
                genero: genero,
                nacimiento: nacimiento,
                cui: cui,
                municipio: municipio,
                zona: zona,
                instituto: instituto,
                imagen: imagen,
                estado: "activo"
        };

        localStorage.setItem("usuarios",JSON.stringify(usuarios));
        localStorage.setItem("usernow",usuarios.length+1);

        window.location.href = "libros.html";
    }else{
        alert("Debes llenar bien todos los campos");
    }

});
