const mockResponse = {
    data: {
      results: [
        {
          name: {
            first: 'John',
            last: 'Doe',
            title: 'mr'
          },
          picture: {
            large: "https://randomuser.me/api/portraits/men/39.jpg" 
          },
          login: {
            username: 'johndoe'
          }
        },
        {
          name: {
            first: 'John',
            last: 'Doe',
            title: 'mr'
          },
          picture: {
            large: "https://randomuser.me/api/portraits/men/39.jpg" 
          },
          login: {
            username: 'johndoe'
          }
        },
        {
          name: {
            first: 'John',
            last: 'Doe',
            title: 'mr'
          },
          picture: {
            large: "https://randomuser.me/api/portraits/men/39.jpg" 
          },
          login: {
            username: 'johndoe'
          }
        },
        {
          name: {
            first: 'John',
            last: 'Doe',
            title: 'mr'
          },
          picture: {
            large: "https://randomuser.me/api/portraits/men/39.jpg" 
          },
          login: {
            username: 'johndoe'
          }
        },
        {
          name: {
            first: 'John',
            last: 'Doe',
            title: 'mr'
          },
          picture: {
            large: "https://randomuser.me/api/portraits/men/39.jpg" 
          },
          login: {
            username: 'johndoe'
          }
        },
      ]
    }
  };
  
  export default {
    get: jest.fn().mockResolvedValue(mockResponse)
  };