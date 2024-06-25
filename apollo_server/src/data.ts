const policyholders = {
  code: "0000000001",
  name: "John Doe",
  registration_date: "2023-01-01",
  introducer_code: null,
  left: [
    {
      code: "0000000002",
      name: "Jane Doe",
      registration_date: "2023-01-11",
      introducer_code: "0000000001",
      left: [
        {
          code: "0000000004",
          name: "Alice Doe",
          registration_date: "2023-01-17",
          introducer_code: "0000000001",
          left: [
            {
              code: "0000000008",
              name: "Bob Doe",
              registration_date: "2023-02-05",
              introducer_code: "0000000004",
              left: [
                {
                  code: "0000000016",
                  name: "Charlie Doe",
                  registration_date: "2023-03-20",
                  introducer_code: "0000000004",
                },
              ],
            },
          ],
          right: [
            {
              code: "0000000009",
              name: "Dave Doe",
              registration_date: "2023-02-10",
              introducer_code: "0000000004",
              left: [
                {
                  code: "0000000017",
                  name: "Eve Doe",
                  registration_date: "2023-04-05",
                  introducer_code: "0000000004",
                  left: [
                    {
                      code: "0000000019",
                      name: "Frank Doe",
                      registration_date: "2023-05-02",
                      introducer_code: "0000000004",
                    },
                  ],
                  right: [
                    {
                      code: "0000000020",
                      name: "Grace Doe",
                      registration_date: "2023-05-16",
                      introducer_code: "0000000004",
                    },
                  ],
                },
              ],
              right: [
                {
                  code: "0000000018",
                  name: "Hank Doe",
                  registration_date: "2023-04-18",
                  introducer_code: "0000000001",
                },
              ],
            },
          ],
        },
      ],
      right: [
        {
          code: "0000000005",
          name: "Ivy Doe",
          registration_date: "2023-01-18",
          introducer_code: "0000000001",
          left: [
            {
              code: "0000000010",
              name: "Jack Doe",
              registration_date: "2023-02-12",
              introducer_code: "0000000005",
            },
          ],
          right: [
            {
              code: "0000000011",
              name: "Kathy Doe",
              registration_date: "2023-02-17",
              introducer_code: "0000000005",
            },
          ],
        },
      ],
    },
  ],
  right: [
    {
      code: "0000000003",
      name: "Leo Doe",
      registration_date: "2023-01-15",
      introducer_code: "0000000001",
      left: [
        {
          code: "0000000006",
          name: "Mona Doe",
          registration_date: "2023-01-19",
          introducer_code: "0000000003",
          left: [
            {
              code: "0000000012",
              name: "Nina Doe",
              registration_date: "2023-02-19",
              introducer_code: "0000000001",
            },
          ],
          right: [
            {
              code: "0000000013",
              name: "Oscar Doe",
              registration_date: "2023-02-25",
              introducer_code: "0000000003",
            },
          ],
        },
      ],
      right: [
        {
          code: "0000000007",
          name: "Paul Doe",
          registration_date: "2023-01-19",
          introducer_code: "0000000003",
          left: [
            {
              code: "0000000014",
              name: "Quinn Doe",
              registration_date: "2023-03-05",
              introducer_code: "0000000003",
            },
          ],
          right: [
            {
              code: "0000000015",
              name: "Rachel Doe",
              registration_date: "2023-03-06",
              introducer_code: "0000000003",
            },
          ],
        },
      ],
    },
  ],
};
export default policyholders;
