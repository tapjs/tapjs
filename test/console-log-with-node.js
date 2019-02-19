const createdMultipleStepsWithWeightAndCapacity = {
  name: "Multiple Steps with Weight and Capacity",
  notes: "",
  isGlobal: false,
  usedByModels: [
    {
      id: "cjej5u2d41jf80105kxn2cen4",
      modelNumber: "EX5600-6",
      serialNumberPrefix: ""
    }
  ],
  stepsOrdered: {
    id: "cjl9dul7w00ur019310000001",
    createdAt: "2018-12-25T00:00:00.000Z",
    updatedAt: "2018-12-25T00:00:00.000Z",
    order: "[]",
    steps: [
      {
        updatedAt: "2018-08-25T12:10:31.000Z",
        adviceReferences: [
          {
            id: "cjl9dvip300w701932q4h0001",
            createdAt: "2017-09-29T04:10:21.000Z",
            updatedAt: "2017-09-29T04:10:21.000Z",
            adviceBinding: {
              id: "cjb33ectcpi9a0105lpa8rfhi",
              createdAt: "2017-09-29T04:10:21.000Z",
              updatedAt: "2017-09-29T04:10:21.000Z",
              adviceDefinition: {
                name: "{{component}} Weight",
                createdAt: "2017-09-28T08:36:26.000Z",
                updatedAt: "2017-09-28T08:36:26.000Z",
                icon:
                  "http://icons-100915300771.s3.amazonaws.com/doc-information.png",
                id: "cj5svnmj7wpzo0109or53ysgg",
                variableDefinitions: [
                  {
                    id: "cj5c0hyoqaata01216o7oc90h",
                    createdAt: "2017-09-29T04:10:21.000Z",
                    updatedAt: "2017-09-29T04:10:21.000Z",
                    name: "weight",
                    description: "The weight (measured in kilograms)",
                    requiresLookup: false
                  },
                  {
                    id: "cj5djajys14610175ixkzs959",
                    createdAt: "2017-09-29T04:10:21.000Z",
                    updatedAt: "2017-09-29T04:10:21.000Z",
                    name: "component",
                    description:
                      "The name of the system, subsystem, or a part of the machine",
                    requiresLookup: true
                  }
                ],
                template:
                  "The weight of {{component}} is approximately {{weight}} kgs.",
                isGeneral: false,
                adviceCategory: {
                  name: "Weight",
                  iconStyle: null,
                  textStyle: "0070c0",
                  id: "cj4qht4e03gse0151fjhpnubt",
                  createdAt: "2017-09-29T04:10:21.000Z",
                  updatedAt: "2017-09-29T04:10:21.000Z",
                  adviceIcon: "ion-android-settings"
                }
              },
              variableBindings: [
                {
                  id: "cjb33ectdpi9b0105iwb00sll",
                  createdAt: "2017-09-29T04:10:21.000Z",
                  updatedAt: "2017-09-29T04:10:21.000Z",
                  value: "555",
                  variableDefinition: {
                    id: "cj5djajys14610175ixkzs959",
                    createdAt: "2017-09-29T04:10:21.000Z",
                    updatedAt: "2017-09-29T04:10:21.000Z",
                    name: "component",
                    description:
                      "The name of the system, subsystem, or a part of the machine",
                    requiresLookup: true
                  }
                },
                {
                  id: "cjb33ectdpi9c0105hhni04ek",
                  createdAt: "2017-09-29T04:10:21.000Z",
                  updatedAt: "2017-09-29T04:10:21.000Z",
                  value: "666",
                  variableDefinition: {
                    id: "cj5c0hyoqaata01216o7oc90h",
                    createdAt: "2017-09-29T04:10:21.000Z",
                    updatedAt: "2017-09-29T04:10:21.000Z",
                    name: "weight",
                    description: "The weight (measured in kilograms)",
                    requiresLookup: false
                  }
                }
              ]
            }
          },
          {
            id: "cjl9dvk9i00wd01930ax00002",
            createdAt: "2017-09-29T04:10:21.000Z",
            updatedAt: "2017-09-29T04:10:21.000Z",
            adviceBinding: {
              id: "cjaaov11mftli0150xfz7mx0v",
              createdAt: "2017-09-29T04:10:21.000Z",
              updatedAt: "2017-09-29T04:10:21.000Z",
              adviceDefinition: {
                name: "{{compartment}} Capacity",
                createdAt: "2017-09-28T09:02:27.000Z",
                updatedAt: "2017-09-28T09:02:27.000Z",
                icon:
                  "http://icons-100915300771.s3.amazonaws.com/doc-information.png",
                id: "cj5j6nsl7fqzv0182wnhal2cm",
                variableDefinitions: [
                  {
                    id: "cj5d7grap767l01251p3dg22v",
                    createdAt: "2017-09-29T04:10:21.000Z",
                    updatedAt: "2017-09-29T04:10:21.000Z",
                    name: "capacity",
                    description: "The capacity (measured in litres)",
                    requiresLookup: false
                  },
                  {
                    id: "cj5djajys14610175ixkzs959",
                    createdAt: "2017-09-29T04:10:21.000Z",
                    updatedAt: "2017-09-29T04:10:21.000Z",
                    name: "component",
                    description:
                      "The name of the system, subsystem, or a part of the machine",
                    requiresLookup: true
                  }
                ],
                template:
                  "The capacity of the {{compartment}} is approximately {{capacity}} litres of {{fluidType}}.",
                isGeneral: false,
                adviceCategory: {
                  name: "Fluid Capacity",
                  iconStyle: null,
                  textStyle: "0070c0",
                  id: "cj4qht9783gsl0151c3lbq4x3",
                  createdAt: "2017-09-29T04:10:21.000Z",
                  updatedAt: "2017-09-29T04:10:21.000Z",
                  adviceIcon: "ion-soup-can"
                }
              },
              variableBindings: [
                {
                  id: "cjaaov11nftlj0150zl4cgi7u",
                  createdAt: "2017-09-29T04:10:21.000Z",
                  updatedAt: "2017-09-29T04:10:21.000Z",
                  value: "Gear Oil SAE60",
                  variableDefinition: {
                    id: "cj7ovy57w692t0183tzmhofxe",
                    createdAt: "2017-09-29T04:10:21.000Z",
                    updatedAt: "2017-09-29T04:10:21.000Z",
                    name: "fluidType",
                    description: "The type of fluids - usually the viscocity",
                    requiresLookup: false
                  }
                },
                {
                  id: "cjaaov11nftlk01506f3a734o",
                  createdAt: "2017-09-29T04:10:21.000Z",
                  updatedAt: "2017-09-29T04:10:21.000Z",
                  value: "Brakes",
                  variableDefinition: {
                    id: "cj7ilh2w5546u0183mjzzleca",
                    createdAt: "2017-09-29T04:10:21.000Z",
                    updatedAt: "2017-09-29T04:10:21.000Z",
                    name: "compartment",
                    description: "The name of a fluid compartment",
                    requiresLookup: true
                  }
                },
                {
                  id: "cjaaov11nftll015013ifl5j9",
                  createdAt: "2017-09-29T04:10:21.000Z",
                  updatedAt: "2017-09-29T04:10:21.000Z",
                  value: "99",
                  variableDefinition: {
                    id: "cj5d7grap767l01251p3dg22v",
                    createdAt: "2017-09-29T04:10:21.000Z",
                    updatedAt: "2017-09-29T04:10:21.000Z",
                    name: "capacity",
                    description: "The capacity (measured in litres)",
                    requiresLookup: false
                  }
                }
              ]
            }
          }
        ],
        id: "cjl9dul7w00us0193tfi00001",
        createdAt: "2018-08-25T12:10:04.000Z",
        instructions: "1)",
        images: []
      },
      {
        updatedAt: "2018-08-25T12:10:33.000Z",
        adviceReferences: [
          {
            id: "cjl9dvmah00wi0193z3140002",
            createdAt: "2017-09-29T04:10:21.000Z",
            updatedAt: "2017-09-29T04:10:21.000Z",
            adviceBinding: {
              id: "cjb5wmkc6o6gs0189bkxs4r9o",
              createdAt: "2017-09-29T04:10:21.000Z",
              updatedAt: "2017-09-29T04:10:21.000Z",
              adviceDefinition: {
                name: "{{component}} Weight",
                createdAt: "2017-09-28T08:36:26.000Z",
                updatedAt: "2017-09-28T08:36:26.000Z",
                icon:
                  "http://icons-100915300771.s3.amazonaws.com/doc-information.png",
                id: "cj5svnmj7wpzo0109or53ysgg",
                variableDefinitions: [
                  {
                    id: "cj5c0hyoqaata01216o7oc90h",
                    createdAt: "2017-09-29T04:10:21.000Z",
                    updatedAt: "2017-09-29T04:10:21.000Z",
                    name: "weight",
                    requiresLookup: false,
                    description: "The weight (measured in kilograms)"
                  },
                  {
                    id: "cj5djajys14610175ixkzs959",
                    createdAt: "2017-09-29T04:10:21.000Z",
                    updatedAt: "2017-09-29T04:10:21.000Z",
                    name: "component",
                    description:
                      "The name of the system, subsystem, or a part of the machine",
                    requiresLookup: true
                  }
                ],
                template:
                  "The weight of {{component}} is approximately {{weight}} kgs.",
                isGeneral: false,
                adviceCategory: {
                  name: "Weight",
                  iconStyle: null,
                  textStyle: "0070c0",
                  id: "cj4qht4e03gse0151fjhpnubt",
                  createdAt: "2017-09-29T04:10:21.000Z",
                  updatedAt: "2017-09-29T04:10:21.000Z",
                  adviceIcon: "ion-android-settings"
                }
              },
              variableBindings: [
                {
                  id: "cjb5wmkc6o6gt0189tbz41zve",
                  createdAt: "2017-09-29T04:10:21.000Z",
                  updatedAt: "2017-09-29T04:10:21.000Z",
                  value: "Bucket",
                  variableDefinition: {
                    id: "cj5djajys14610175ixkzs959",
                    createdAt: "2017-09-29T04:10:21.000Z",
                    updatedAt: "2017-09-29T04:10:21.000Z",
                    name: "component",
                    description:
                      "The name of the system, subsystem, or a part of the machine",
                    requiresLookup: true
                  }
                },
                {
                  id: "cjb5wmkc6o6gu01896chvw21j",
                  createdAt: "2017-09-29T04:10:21.000Z",
                  updatedAt: "2017-09-29T04:10:21.000Z",
                  value: "99",
                  variableDefinition: {
                    id: "cj5c0hyoqaata01216o7oc90h",
                    createdAt: "2017-09-29T04:10:21.000Z",
                    updatedAt: "2017-09-29T04:10:21.000Z",
                    name: "weight",
                    description: "The weight (measured in kilograms)",
                    requiresLookup: false
                  }
                }
              ]
            }
          }
        ],
        id: "cjl9dv0bo00v701932dmk0002",
        createdAt: "2018-08-25T12:10:24.000Z",
        instructions: "2)",
        images: []
      },
      {
        updatedAt: "2018-08-25T12:10:36.000Z",
        adviceReferences: [
          {
            id: "cjl9dvo1b00wn0193ln130003",
            createdAt: "2017-09-29T04:10:21.000Z",
            updatedAt: "2017-09-29T04:10:21.000Z",
            adviceBinding: {
              id: "cjb5wjj8vnxlh0198qyev0foi",
              createdAt: "2017-09-29T04:10:21.000Z",
              updatedAt: "2017-09-29T04:10:21.000Z",
              adviceDefinition: {
                name: "{{component}} Weight",
                createdAt: "2017-09-28T08:36:26.000Z",
                updatedAt: "2017-09-28T08:36:26.000Z",
                icon:
                  "http://icons-100915300771.s3.amazonaws.com/doc-information.png",
                id: "cj5svnmj7wpzo0109or53ysgg",
                variableDefinitions: [
                  {
                    id: "cj5c0hyoqaata01216o7oc90h",
                    createdAt: "2017-09-29T04:10:21.000Z",
                    updatedAt: "2017-09-29T04:10:21.000Z",
                    name: "weight",
                    description: "The weight (measured in kilograms)",
                    requiresLookup: false
                  },
                  {
                    id: "cj5djajys14610175ixkzs959",
                    createdAt: "2017-09-29T04:10:21.000Z",
                    updatedAt: "2017-09-29T04:10:21.000Z",
                    name: "component",
                    description:
                      "The name of the system, subsystem, or a part of the machine",
                    requiresLookup: true
                  }
                ],
                template:
                  "The weight of {{component}} is approximately {{weight}} kgs.",
                isGeneral: false,
                adviceCategory: {
                  name: "Weight",
                  iconStyle: null,
                  textStyle: "0070c0",
                  id: "cj4qht4e03gse0151fjhpnubt",
                  createdAt: "2017-09-29T04:10:21.000Z",
                  updatedAt: "2017-09-29T04:10:21.000Z",
                  adviceIcon: "ion-android-settings"
                }
              },
              variableBindings: [
                {
                  id: "cjb5wjj8vnxli0198kfg399fb",
                  createdAt: "2017-09-29T04:10:21.000Z",
                  updatedAt: "2017-09-29T04:10:21.000Z",
                  value: "Cylinders",
                  variableDefinition: {
                    id: "cj5djajys14610175ixkzs959",
                    createdAt: "2017-09-29T04:10:21.000Z",
                    updatedAt: "2017-09-29T04:10:21.000Z",
                    name: "component",
                    description:
                      "The name of the system, subsystem, or a part of the machine",
                    requiresLookup: true
                  }
                },
                {
                  id: "cjb5wjj8vnxlj01985fjk7ymk",
                  createdAt: "2017-09-29T04:10:21.000Z",
                  updatedAt: "2017-09-29T04:10:21.000Z",
                  value: "90",
                  variableDefinition: {
                    id: "cj5c0hyoqaata01216o7oc90h",
                    createdAt: "2017-09-29T04:10:21.000Z",
                    updatedAt: "2017-09-29T04:10:21.000Z",
                    name: "weight",
                    description: "The weight (measured in kilograms)",
                    requiresLookup: false
                  }
                }
              ]
            }
          },
          {
            id: "cjl9dvplh00ws0193759r0003",
            createdAt: "2017-09-29T04:10:21.000Z",
            updatedAt: "2017-09-29T04:10:21.000Z",
            adviceBinding: {
              id: "cja8znv8vbgmi0139rdqzlcui",
              createdAt: "2017-09-29T04:10:21.000Z",
              updatedAt: "2017-09-29T04:10:21.000Z",
              adviceDefinition: {
                name: "{{compartment}} Capacity",
                createdAt: "2017-09-28T09:02:27.000Z",
                updatedAt: "2017-09-28T09:02:27.000Z",
                icon:
                  "http://icons-100915300771.s3.amazonaws.com/doc-information.png",
                id: "cj5j6nsl7fqzv0182wnhal2cm",
                variableDefinitions: [
                  {
                    id: "cj5d7grap767l01251p3dg22v",
                    createdAt: "2017-09-29T04:10:21.000Z",
                    updatedAt: "2017-09-29T04:10:21.000Z",
                    name: "capacity",
                    description: "The capacity (measured in litres)",
                    requiresLookup: false
                  },
                  {
                    id: "cj5djajys14610175ixkzs959",
                    createdAt: "2017-09-29T04:10:21.000Z",
                    updatedAt: "2017-09-29T04:10:21.000Z",
                    name: "component",
                    description:
                      "The name of the system, subsystem, or a part of the machine",
                    requiresLookup: true
                  }
                ],
                template:
                  "The capacity of the {{compartment}} is approximately {{capacity}} litres of {{fluidType}}.",
                isGeneral: false,
                adviceCategory: {
                  name: "Fluid Capacity",
                  iconStyle: null,
                  textStyle: "0070c0",
                  id: "cj4qht9783gsl0151c3lbq4x3",
                  createdAt: "2017-09-29T04:10:21.000Z",
                  updatedAt: "2017-09-29T04:10:21.000Z",
                  adviceIcon: "ion-soup-can"
                }
              },
              variableBindings: [
                {
                  id: "cja8znv8wbgmj0139el260wwh",
                  createdAt: "2017-09-29T04:10:21.000Z",
                  updatedAt: "2017-09-29T04:10:21.000Z",
                  value: "Description of Fluid Fluid Type",
                  variableDefinition: {
                    id: "cj7ovy57w692t0183tzmhofxe",
                    createdAt: "2017-09-29T04:10:21.000Z",
                    updatedAt: "2017-09-29T04:10:21.000Z",
                    name: "fluidType",
                    description: "The type of fluids - usually the viscocity",
                    requiresLookup: false
                  }
                },
                {
                  id: "cja8znv8wbgmk0139gtq9ofaj",
                  createdAt: "2017-09-29T04:10:21.000Z",
                  updatedAt: "2017-09-29T04:10:21.000Z",
                  value: "Engine",
                  variableDefinition: {
                    id: "cj7ilh2w5546u0183mjzzleca",
                    createdAt: "2017-09-29T04:10:21.000Z",
                    updatedAt: "2017-09-29T04:10:21.000Z",
                    name: "compartment",
                    description: "The name of a fluid compartment",
                    requiresLookup: true
                  }
                },
                {
                  id: "cja8znv8wbgml0139d76cbq3r",
                  createdAt: "2017-09-29T04:10:21.000Z",
                  updatedAt: "2017-09-29T04:10:21.000Z",
                  value: "60",
                  variableDefinition: {
                    id: "cj5d7grap767l01251p3dg22v",
                    createdAt: "2017-09-29T04:10:21.000Z",
                    updatedAt: "2017-09-29T04:10:21.000Z",
                    name: "capacity",
                    description: "The capacity (measured in litres)",
                    requiresLookup: false
                  }
                }
              ]
            }
          }
        ],
        id: "cjl9dv0el00vb0193mikw0003",
        createdAt: "2018-08-25T12:10:24.000Z",
        instructions: "3)",
        images: []
      },
      {
        updatedAt: "2018-08-25T12:10:38.000Z",
        adviceReferences: [
          {
            id: "cjl9dvrwq00wy01936ysi0004",
            createdAt: "2017-09-29T04:10:21.000Z",
            updatedAt: "2017-09-29T04:10:21.000Z",
            adviceBinding: {
              id: "cjb5wgbf0o06h0183d4f8y5i2",
              createdAt: "2017-09-29T04:10:21.000Z",
              updatedAt: "2017-09-29T04:10:21.000Z",
              adviceDefinition: {
                name: "{{component}} Weight",
                createdAt: "2017-09-28T08:36:26.000Z",
                updatedAt: "2017-09-28T08:36:26.000Z",
                icon:
                  "http://icons-100915300771.s3.amazonaws.com/doc-information.png",
                id: "cj5svnmj7wpzo0109or53ysgg",
                variableDefinitions: [
                  {
                    id: "cj5c0hyoqaata01216o7oc90h",
                    createdAt: "2017-09-29T04:10:21.000Z",
                    updatedAt: "2017-09-29T04:10:21.000Z",
                    name: "weight",
                    description: "The weight (measured in kilograms)",
                    requiresLookup: false
                  },
                  {
                    id: "cj5djajys14610175ixkzs959",
                    createdAt: "2017-09-29T04:10:21.000Z",
                    updatedAt: "2017-09-29T04:10:21.000Z",
                    name: "component",
                    description:
                      "The name of the system, subsystem, or a part of the machine",
                    requiresLookup: true
                  }
                ],
                template:
                  "The weight of {{component}} is approximately {{weight}} kgs.",
                isGeneral: false,
                adviceCategory: {
                  name: "Weight",
                  iconStyle: null,
                  textStyle: "0070c0",
                  id: "cj4qht4e03gse0151fjhpnubt",
                  createdAt: "2017-09-29T04:10:21.000Z",
                  updatedAt: "2017-09-29T04:10:21.000Z",
                  adviceIcon: "ion-android-settings"
                }
              },
              variableBindings: [
                {
                  id: "cjb5wgbf0o06i0183pzszmi62",
                  createdAt: "2017-09-29T04:10:21.000Z",
                  updatedAt: "2017-09-29T04:10:21.000Z",
                  value: "Engine",
                  variableDefinition: {
                    id: "cj5djajys14610175ixkzs959",
                    createdAt: "2017-09-29T04:10:21.000Z",
                    updatedAt: "2017-09-29T04:10:21.000Z",
                    name: "component",
                    description:
                      "The name of the system, subsystem, or a part of the machine",
                    requiresLookup: true
                  }
                },
                {
                  id: "cjb5wgbf0o06j0183gztcjutf",
                  createdAt: "2017-09-29T04:10:21.000Z",
                  updatedAt: "2017-09-29T04:10:21.000Z",
                  value: "90",
                  variableDefinition: {
                    id: "cj5c0hyoqaata01216o7oc90h",
                    createdAt: "2017-09-29T04:10:21.000Z",
                    updatedAt: "2017-09-29T04:10:21.000Z",
                    name: "weight",
                    description: "The weight (measured in kilograms)",
                    requiresLookup: false
                  }
                }
              ]
            }
          }
        ],
        id: "cjl9dv0hs00vf0193zg970004",
        createdAt: "2018-08-25T12:10:24.000Z",
        instructions: "4)",
        images: []
      },
      {
        updatedAt: "2018-08-25T12:10:41.000Z",
        adviceReferences: [
          {
            id: "cjl9dvv5q00x30193iqpg0005",
            createdAt: "2017-09-29T04:10:21.000Z",
            updatedAt: "2017-09-29T04:10:21.000Z",
            adviceBinding: {
              id: "cjb2vw65zlhz10178cgtvhwe0",
              createdAt: "2017-09-29T04:10:21.000Z",
              updatedAt: "2017-09-29T04:10:21.000Z",
              adviceDefinition: {
                name: "{{component}} Weight",
                createdAt: "2017-09-28T08:36:26.000Z",
                updatedAt: "2017-09-28T08:36:26.000Z",
                icon:
                  "http://icons-100915300771.s3.amazonaws.com/doc-information.png",
                id: "cj5svnmj7wpzo0109or53ysgg",
                variableDefinitions: [
                  {
                    id: "cj5c0hyoqaata01216o7oc90h",
                    createdAt: "2017-09-29T04:10:21.000Z",
                    updatedAt: "2017-09-29T04:10:21.000Z",
                    name: "weight",
                    description: "The weight (measured in kilograms)",
                    requiresLookup: false
                  },
                  {
                    id: "cj5djajys14610175ixkzs959",
                    createdAt: "2017-09-29T04:10:21.000Z",
                    updatedAt: "2017-09-29T04:10:21.000Z",
                    name: "component",
                    description:
                      "The name of the system, subsystem, or a part of the machine",
                    requiresLookup: true
                  }
                ],
                template:
                  "The weight of {{component}} is approximately {{weight}} kgs.",
                isGeneral: false,
                adviceCategory: {
                  name: "Weight",
                  iconStyle: null,
                  textStyle: "0070c0",
                  id: "cj4qht4e03gse0151fjhpnubt",
                  createdAt: "2017-09-29T04:10:21.000Z",
                  updatedAt: "2017-09-29T04:10:21.000Z",
                  adviceIcon: "ion-android-settings"
                }
              },
              variableBindings: [
                {
                  id: "cjb2vw65zlhz20178430o8ulz",
                  createdAt: "2017-09-29T04:10:21.000Z",
                  updatedAt: "2017-09-29T04:10:21.000Z",
                  value: "Test Component 2",
                  variableDefinition: {
                    id: "cj5djajys14610175ixkzs959",
                    createdAt: "2017-09-29T04:10:21.000Z",
                    updatedAt: "2017-09-29T04:10:21.000Z",
                    name: "component",
                    description:
                      "The name of the system, subsystem, or a part of the machine",
                    requiresLookup: true
                  }
                },
                {
                  id: "cjb2vw65zlhz30178zpfur56e",
                  createdAt: "2017-09-29T04:10:21.000Z",
                  updatedAt: "2017-09-29T04:10:21.000Z",
                  value: "8888",
                  variableDefinition: {
                    id: "cj5c0hyoqaata01216o7oc90h",
                    createdAt: "2017-09-29T04:10:21.000Z",
                    updatedAt: "2017-09-29T04:10:21.000Z",
                    name: "weight",
                    description: "The weight (measured in kilograms)",
                    requiresLookup: false
                  }
                }
              ]
            }
          },
          {
            id: "cjl9dvyk300x80193xeua0005",
            createdAt: "2017-09-29T04:10:21.000Z",
            updatedAt: "2017-09-29T04:10:21.000Z",
            adviceBinding: {
              id: "cjaaov11mftli0150xfz7mx0v",
              createdAt: "2017-09-29T04:10:21.000Z",
              updatedAt: "2017-09-29T04:10:21.000Z",
              adviceDefinition: {
                name: "{{compartment}} Capacity",
                createdAt: "2017-09-28T09:02:27.000Z",
                updatedAt: "2017-09-28T09:02:27.000Z",
                icon:
                  "http://icons-100915300771.s3.amazonaws.com/doc-information.png",
                id: "cj5j6nsl7fqzv0182wnhal2cm",
                variableDefinitions: [
                  {
                    id: "cj5d7grap767l01251p3dg22v",
                    createdAt: "2017-09-29T04:10:21.000Z",
                    updatedAt: "2017-09-29T04:10:21.000Z",
                    name: "capacity",
                    description: "The capacity (measured in litres)",
                    requiresLookup: false
                  },
                  {
                    id: "cj5djajys14610175ixkzs959",
                    createdAt: "2017-09-29T04:10:21.000Z",
                    updatedAt: "2017-09-29T04:10:21.000Z",
                    name: "component",
                    description:
                      "The name of the system, subsystem, or a part of the machine",
                    requiresLookup: true
                  }
                ],
                template:
                  "The capacity of the {{compartment}} is approximately {{capacity}} litres of {{fluidType}}.",
                isGeneral: false,
                adviceCategory: {
                  name: "Fluid Capacity",
                  iconStyle: null,
                  textStyle: "0070c0",
                  id: "cj4qht9783gsl0151c3lbq4x3",
                  createdAt: "2017-09-29T04:10:21.000Z",
                  updatedAt: "2017-09-29T04:10:21.000Z",
                  adviceIcon: "ion-soup-can"
                }
              },
              variableBindings: [
                {
                  id: "cjaaov11nftlj0150zl4cgi7u",
                  createdAt: "2017-09-29T04:10:21.000Z",
                  updatedAt: "2017-09-29T04:10:21.000Z",
                  value: "Gear Oil SAE60",
                  variableDefinition: {
                    id: "cj7ovy57w692t0183tzmhofxe",
                    createdAt: "2017-09-29T04:10:21.000Z",
                    updatedAt: "2017-09-29T04:10:21.000Z",
                    name: "fluidType",
                    description: "The type of fluids - usually the viscocity",
                    requiresLookup: false
                  }
                },
                {
                  id: "cjaaov11nftlk01506f3a734o",
                  createdAt: "2017-09-29T04:10:21.000Z",
                  updatedAt: "2017-09-29T04:10:21.000Z",
                  value: "Brakes",
                  variableDefinition: {
                    id: "cj7ilh2w5546u0183mjzzleca",
                    createdAt: "2017-09-29T04:10:21.000Z",
                    updatedAt: "2017-09-29T04:10:21.000Z",
                    name: "compartment",
                    description: "The name of a fluid compartment",
                    requiresLookup: true
                  }
                },
                {
                  id: "cjaaov11nftll015013ifl5j9",
                  createdAt: "2017-09-29T04:10:21.000Z",
                  updatedAt: "2017-09-29T04:10:21.000Z",
                  value: "99",
                  variableDefinition: {
                    id: "cj5d7grap767l01251p3dg22v",
                    createdAt: "2017-09-29T04:10:21.000Z",
                    updatedAt: "2017-09-29T04:10:21.000Z",
                    name: "capacity",
                    description: "The capacity (measured in litres)",
                    requiresLookup: false
                  }
                }
              ]
            }
          },
          {
            id: "cjl9dw27q00xe0193e9qm0005",
            createdAt: "2017-09-29T04:10:21.000Z",
            updatedAt: "2017-09-29T04:10:21.000Z",
            adviceBinding: {
              id: "cjb6esm2ax7r301830q5m6lfc",
              createdAt: "2017-09-29T04:10:21.000Z",
              updatedAt: "2017-09-29T04:10:21.000Z",
              adviceDefinition: {
                name: "{{component}} Weight",
                createdAt: "2017-09-28T08:36:26.000Z",
                updatedAt: "2017-09-28T08:36:26.000Z",
                icon:
                  "http://icons-100915300771.s3.amazonaws.com/doc-information.png",
                id: "cj5svnmj7wpzo0109or53ysgg",
                variableDefinitions: [
                  {
                    id: "cj5c0hyoqaata01216o7oc90h",
                    createdAt: "2017-09-29T04:10:21.000Z",
                    updatedAt: "2017-09-29T04:10:21.000Z",
                    name: "weight",
                    description: "The weight (measured in kilograms)",
                    requiresLookup: false
                  },
                  {
                    id: "cj5djajys14610175ixkzs959",
                    createdAt: "2017-09-29T04:10:21.000Z",
                    updatedAt: "2017-09-29T04:10:21.000Z",
                    name: "component",
                    description:
                      "The name of the system, subsystem, or a part of the machine",
                    requiresLookup: true
                  }
                ],
                template:
                  "The weight of {{component}} is approximately {{weight}} kgs.",
                isGeneral: false,
                adviceCategory: {
                  name: "Weight",
                  iconStyle: null,
                  textStyle: "0070c0",
                  id: "cj4qht4e03gse0151fjhpnubt",
                  createdAt: "2017-09-29T04:10:21.000Z",
                  updatedAt: "2017-09-29T04:10:21.000Z",
                  adviceIcon: "ion-android-settings"
                }
              },
              variableBindings: [
                {
                  id: "cjb6esm2ax7r401836rub8r30",
                  createdAt: "2017-09-29T04:10:21.000Z",
                  updatedAt: "2017-09-29T04:10:21.000Z",
                  value: "Test Component 3",
                  variableDefinition: {
                    id: "cj5djajys14610175ixkzs959",
                    createdAt: "2017-09-29T04:10:21.000Z",
                    updatedAt: "2017-09-29T04:10:21.000Z",
                    name: "component",
                    description:
                      "The name of the system, subsystem, or a part of the machine",
                    requiresLookup: true
                  }
                },
                {
                  id: "cjb6esm2ax7r50183kmwr00qv",
                  createdAt: "2017-09-29T04:10:21.000Z",
                  updatedAt: "2017-09-29T04:10:21.000Z",
                  value: "123",
                  variableDefinition: {
                    id: "cj5c0hyoqaata01216o7oc90h",
                    createdAt: "2017-09-29T04:10:21.000Z",
                    updatedAt: "2017-09-29T04:10:21.000Z",
                    name: "weight",
                    description: "The weight (measured in kilograms)",
                    requiresLookup: false
                  }
                }
              ]
            }
          },
          {
            id: "cjl9dw9cu00xk0193npcd0005",
            createdAt: "2017-09-29T04:10:21.000Z",
            updatedAt: "2017-09-29T04:10:21.000Z",
            adviceBinding: {
              id: "cja8znv8vbgmi0139rdqzlcui",
              createdAt: "2017-09-29T04:10:21.000Z",
              updatedAt: "2017-09-29T04:10:21.000Z",
              adviceDefinition: {
                name: "{{compartment}} Capacity",
                createdAt: "2017-09-28T09:02:27.000Z",
                updatedAt: "2017-09-28T09:02:27.000Z",
                icon:
                  "http://icons-100915300771.s3.amazonaws.com/doc-information.png",
                id: "cj5j6nsl7fqzv0182wnhal2cm",
                variableDefinitions: [
                  {
                    id: "cj5d7grap767l01251p3dg22v",
                    createdAt: "2017-09-29T04:10:21.000Z",
                    updatedAt: "2017-09-29T04:10:21.000Z",
                    name: "capacity",
                    description: "The capacity (measured in litres)",
                    requiresLookup: false
                  },
                  {
                    id: "cj5djajys14610175ixkzs959",
                    createdAt: "2017-09-29T04:10:21.000Z",
                    updatedAt: "2017-09-29T04:10:21.000Z",
                    name: "component",
                    description:
                      "The name of the system, subsystem, or a part of the machine",
                    requiresLookup: true
                  }
                ],
                template:
                  "The capacity of the {{compartment}} is approximately {{capacity}} litres of {{fluidType}}.",
                isGeneral: false,
                adviceCategory: {
                  name: "Fluid Capacity",
                  iconStyle: null,
                  textStyle: "0070c0",
                  id: "cj4qht9783gsl0151c3lbq4x3",
                  createdAt: "2017-09-29T04:10:21.000Z",
                  updatedAt: "2017-09-29T04:10:21.000Z",
                  adviceIcon: "ion-soup-can"
                }
              },
              variableBindings: [
                {
                  id: "cja8znv8wbgmj0139el260wwh",
                  createdAt: "2017-09-29T04:10:21.000Z",
                  updatedAt: "2017-09-29T04:10:21.000Z",
                  value: "Description of Fluid Fluid Type",
                  variableDefinition: {
                    id: "cj7ovy57w692t0183tzmhofxe",
                    createdAt: "2017-09-29T04:10:21.000Z",
                    updatedAt: "2017-09-29T04:10:21.000Z",
                    name: "fluidType",
                    description: "The type of fluids - usually the viscocity",
                    requiresLookup: false
                  }
                },
                {
                  id: "cja8znv8wbgmk0139gtq9ofaj",
                  createdAt: "2017-09-29T04:10:21.000Z",
                  updatedAt: "2017-09-29T04:10:21.000Z",
                  value: "Engine",
                  variableDefinition: {
                    id: "cj7ilh2w5546u0183mjzzleca",
                    createdAt: "2017-09-29T04:10:21.000Z",
                    updatedAt: "2017-09-29T04:10:21.000Z",
                    name: "compartment",
                    description: "The name of a fluid compartment",
                    requiresLookup: true
                  }
                },
                {
                  id: "cja8znv8wbgml0139d76cbq3r",
                  createdAt: "2017-09-29T04:10:21.000Z",
                  updatedAt: "2017-09-29T04:10:21.000Z",
                  value: "60",
                  variableDefinition: {
                    id: "cj5d7grap767l01251p3dg22v",
                    createdAt: "2017-09-29T04:10:21.000Z",
                    updatedAt: "2017-09-29T04:10:21.000Z",
                    name: "capacity",
                    description: "The capacity (measured in litres)",
                    requiresLookup: false
                  }
                }
              ]
            }
          }
        ],
        id: "cjl9dv0ki00vj0193xhig0005",
        createdAt: "2018-08-25T12:10:24.000Z",
        instructions: "5)",
        images: []
      },
      {
        updatedAt: "2018-08-25T12:10:44.000Z",
        adviceReferences: [
          {
            id: "cjl9dwh8u00xq0193t2290006",
            createdAt: "2017-09-29T04:10:21.000Z",
            updatedAt: "2017-09-29T04:10:21.000Z",
            adviceBinding: {
              id: "cjaaov11mftli0150xfz7mx0v",
              createdAt: "2017-09-29T04:10:21.000Z",
              updatedAt: "2017-09-29T04:10:21.000Z",
              adviceDefinition: {
                name: "{{compartment}} Capacity",
                createdAt: "2017-09-28T09:02:27.000Z",
                updatedAt: "2017-09-28T09:02:27.000Z",
                icon:
                  "http://icons-100915300771.s3.amazonaws.com/doc-information.png",
                id: "cj5j6nsl7fqzv0182wnhal2cm",
                variableDefinitions: [
                  {
                    id: "cj5d7grap767l01251p3dg22v",
                    createdAt: "2017-09-29T04:10:21.000Z",
                    updatedAt: "2017-09-29T04:10:21.000Z",
                    name: "capacity",
                    description: "The capacity (measured in litres)",
                    requiresLookup: false
                  },
                  {
                    id: "cj5djajys14610175ixkzs959",
                    createdAt: "2017-09-29T04:10:21.000Z",
                    updatedAt: "2017-09-29T04:10:21.000Z",
                    name: "component",
                    description:
                      "The name of the system, subsystem, or a part of the machine",
                    requiresLookup: true
                  }
                ],
                template:
                  "The capacity of the {{compartment}} is approximately {{capacity}} litres of {{fluidType}}.",
                isGeneral: false,
                adviceCategory: {
                  name: "Fluid Capacity",
                  iconStyle: null,
                  textStyle: "0070c0",
                  id: "cj4qht9783gsl0151c3lbq4x3",
                  createdAt: "2017-09-29T04:10:21.000Z",
                  updatedAt: "2017-09-29T04:10:21.000Z",
                  adviceIcon: "ion-soup-can"
                }
              },
              variableBindings: [
                {
                  id: "cjaaov11nftlj0150zl4cgi7u",
                  createdAt: "2017-09-29T04:10:21.000Z",
                  updatedAt: "2017-09-29T04:10:21.000Z",
                  value: "Gear Oil SAE60",
                  variableDefinition: {
                    id: "cj7ovy57w692t0183tzmhofxe",
                    createdAt: "2017-09-29T04:10:21.000Z",
                    updatedAt: "2017-09-29T04:10:21.000Z",
                    name: "fluidType",
                    description: "The type of fluids - usually the viscocity",
                    requiresLookup: false
                  }
                },
                {
                  id: "cjaaov11nftlk01506f3a734o",
                  createdAt: "2017-09-29T04:10:21.000Z",
                  updatedAt: "2017-09-29T04:10:21.000Z",
                  value: "Brakes",
                  variableDefinition: {
                    id: "cj7ilh2w5546u0183mjzzleca",
                    createdAt: "2017-09-29T04:10:21.000Z",
                    updatedAt: "2017-09-29T04:10:21.000Z",
                    name: "compartment",
                    description: "The name of a fluid compartment",
                    requiresLookup: true
                  }
                },
                {
                  id: "cjaaov11nftll015013ifl5j9",
                  createdAt: "2017-09-29T04:10:21.000Z",
                  updatedAt: "2017-09-29T04:10:21.000Z",
                  value: "99",
                  variableDefinition: {
                    id: "cj5d7grap767l01251p3dg22v",
                    createdAt: "2017-09-29T04:10:21.000Z",
                    updatedAt: "2017-09-29T04:10:21.000Z",
                    name: "capacity",
                    description: "The capacity (measured in litres)",
                    requiresLookup: false
                  }
                }
              ]
            }
          }
        ],
        id: "cjl9dv0mw00vn0193lz4y0006",
        createdAt: "2018-08-25T12:10:24.000Z",
        instructions: "6)",
        images: []
      }
    ]
  },
  id: "cjl9dul7v00uq01938gbm0001",
  createdAt: "2018-08-25T12:10:04.000Z",
  updatedAt: "2018-08-25T12:10:19.000Z"
};

console.log(
  `createdMultipleStepsWithWeightAndCapacity=${JSON.stringify(
    createdMultipleStepsWithWeightAndCapacity,
    null,
    2
  )}`
);
