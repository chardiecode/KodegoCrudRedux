const data = [
  {
    id: 123,
    firstName: "Richard",
    middleName: "Braga",
    lastName: "Tumapon",
    age: 25,
    address: "Kapatagan, Lanao del Norte",
    skills: [{ name: "Coding" }, { name: "Drawing" }, { name: "Eating" }],
    educationalAttainment: "College Level",
    picture: {
      small:
        "https://scontent.fdvo2-1.fna.fbcdn.net/v/t1.6435-9/36887979_2036780076571300_4985895820164333568_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=09cbfe&_nc_eui2=AeGMf-xclwRz32CWmYdS3jsUkuCD_cUZkzqS4IP9xRmTOrmJlvZ_uwqDR4xJTF0MsC3c_A4SgPv2ZULhBFPiD7pT&_nc_ohc=u1bR7nxRmLwAX-ge0LT&_nc_ht=scontent.fdvo2-1.fna&oh=00_AT9dP_UNsFYCyM32Lo3uHbnDDVnBaHxamjwkKVyc_T9dCw&oe=633762AE",
      medium:
        "https://scontent.fdvo2-1.fna.fbcdn.net/v/t1.6435-9/36887979_2036780076571300_4985895820164333568_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=09cbfe&_nc_eui2=AeGMf-xclwRz32CWmYdS3jsUkuCD_cUZkzqS4IP9xRmTOrmJlvZ_uwqDR4xJTF0MsC3c_A4SgPv2ZULhBFPiD7pT&_nc_ohc=u1bR7nxRmLwAX-ge0LT&_nc_ht=scontent.fdvo2-1.fna&oh=00_AT9dP_UNsFYCyM32Lo3uHbnDDVnBaHxamjwkKVyc_T9dCw&oe=633762AEss",
      large:
        "https://scontent.fdvo2-1.fna.fbcdn.net/v/t1.6435-9/36887979_2036780076571300_4985895820164333568_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=09cbfe&_nc_eui2=AeGMf-xclwRz32CWmYdS3jsUkuCD_cUZkzqS4IP9xRmTOrmJlvZ_uwqDR4xJTF0MsC3c_A4SgPv2ZULhBFPiD7pT&_nc_ohc=u1bR7nxRmLwAX-ge0LT&_nc_ht=scontent.fdvo2-1.fna&oh=00_AT9dP_UNsFYCyM32Lo3uHbnDDVnBaHxamjwkKVyc_T9dCw&oe=633762AEss",
    },
  },
  {
    id: 124,
    firstName: "Aya Vanessa",
    middleName: "Ongao",
    lastName: "Roche",
    age: 25,
    address: "Kapatagan, Lanao del Norte",
    skills: [{ name: "Coding" }, { name: "Drawing" }, { name: "Photography" }],
    educationalAttainment: "College Level",
    picture: {
      small:
        "https://scontent.fdvo2-1.fna.fbcdn.net/v/t1.6435-9/36887979_2036780076571300_4985895820164333568_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=09cbfe&_nc_eui2=AeGMf-xclwRz32CWmYdS3jsUkuCD_cUZkzqS4IP9xRmTOrmJlvZ_uwqDR4xJTF0MsC3c_A4SgPv2ZULhBFPiD7pT&_nc_ohc=u1bR7nxRmLwAX-ge0LT&_nc_ht=scontent.fdvo2-1.fna&oh=00_AT9dP_UNsFYCyM32Lo3uHbnDDVnBaHxamjwkKVyc_T9dCw&oe=633762AE",
      medium:
        "https://scontent.fdvo2-1.fna.fbcdn.net/v/t1.6435-9/36887979_2036780076571300_4985895820164333568_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=09cbfe&_nc_eui2=AeGMf-xclwRz32CWmYdS3jsUkuCD_cUZkzqS4IP9xRmTOrmJlvZ_uwqDR4xJTF0MsC3c_A4SgPv2ZULhBFPiD7pT&_nc_ohc=u1bR7nxRmLwAX-ge0LT&_nc_ht=scontent.fdvo2-1.fna&oh=00_AT9dP_UNsFYCyM32Lo3uHbnDDVnBaHxamjwkKVyc_T9dCw&oe=633762AEss",
      large:
        "https://scontent.fdvo2-1.fna.fbcdn.net/v/t1.6435-9/36887979_2036780076571300_4985895820164333568_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=09cbfe&_nc_eui2=AeGMf-xclwRz32CWmYdS3jsUkuCD_cUZkzqS4IP9xRmTOrmJlvZ_uwqDR4xJTF0MsC3c_A4SgPv2ZULhBFPiD7pT&_nc_ohc=u1bR7nxRmLwAX-ge0LT&_nc_ht=scontent.fdvo2-1.fna&oh=00_AT9dP_UNsFYCyM32Lo3uHbnDDVnBaHxamjwkKVyc_T9dCw&oe=633762AEss",
    },
  },
  {
    id: 125,
    firstName: "Ashley",
    middleName: "Roche",
    lastName: "Tumapon",
    age: 18,
    address: "Kapatagan, Lanao del Norte",
    skills: [{ name: "Coding" }, { name: "Drawing" }, { name: "Photography" }],
    educationalAttainment: "College Level",
    picture: {
      small:
        "https://scontent.fdvo2-1.fna.fbcdn.net/v/t1.6435-9/36887979_2036780076571300_4985895820164333568_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=09cbfe&_nc_eui2=AeGMf-xclwRz32CWmYdS3jsUkuCD_cUZkzqS4IP9xRmTOrmJlvZ_uwqDR4xJTF0MsC3c_A4SgPv2ZULhBFPiD7pT&_nc_ohc=u1bR7nxRmLwAX-ge0LT&_nc_ht=scontent.fdvo2-1.fna&oh=00_AT9dP_UNsFYCyM32Lo3uHbnDDVnBaHxamjwkKVyc_T9dCw&oe=633762AE",
      medium:
        "https://scontent.fdvo2-1.fna.fbcdn.net/v/t1.6435-9/36887979_2036780076571300_4985895820164333568_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=09cbfe&_nc_eui2=AeGMf-xclwRz32CWmYdS3jsUkuCD_cUZkzqS4IP9xRmTOrmJlvZ_uwqDR4xJTF0MsC3c_A4SgPv2ZULhBFPiD7pT&_nc_ohc=u1bR7nxRmLwAX-ge0LT&_nc_ht=scontent.fdvo2-1.fna&oh=00_AT9dP_UNsFYCyM32Lo3uHbnDDVnBaHxamjwkKVyc_T9dCw&oe=633762AEss",
      large:
        "https://scontent.fdvo2-1.fna.fbcdn.net/v/t1.6435-9/36887979_2036780076571300_4985895820164333568_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=09cbfe&_nc_eui2=AeGMf-xclwRz32CWmYdS3jsUkuCD_cUZkzqS4IP9xRmTOrmJlvZ_uwqDR4xJTF0MsC3c_A4SgPv2ZULhBFPiD7pT&_nc_ohc=u1bR7nxRmLwAX-ge0LT&_nc_ht=scontent.fdvo2-1.fna&oh=00_AT9dP_UNsFYCyM32Lo3uHbnDDVnBaHxamjwkKVyc_T9dCw&oe=633762AEss",
    },
  },
  {
    id: 126,
    firstName: "Astrid Yssabelle",
    middleName: "Roche",
    lastName: "Tumapon",
    age: 25,
    address: "Kapatagan, Lanao del Norte",
    skills: [{ name: "Coding" }, { name: "Drawing" }, { name: "Eating" }],
    educationalAttainment: "College Level",
    picture: {
      small:
        "https://scontent.fdvo2-1.fna.fbcdn.net/v/t1.6435-9/36887979_2036780076571300_4985895820164333568_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=09cbfe&_nc_eui2=AeGMf-xclwRz32CWmYdS3jsUkuCD_cUZkzqS4IP9xRmTOrmJlvZ_uwqDR4xJTF0MsC3c_A4SgPv2ZULhBFPiD7pT&_nc_ohc=u1bR7nxRmLwAX-ge0LT&_nc_ht=scontent.fdvo2-1.fna&oh=00_AT9dP_UNsFYCyM32Lo3uHbnDDVnBaHxamjwkKVyc_T9dCw&oe=633762AE",
      medium:
        "https://scontent.fdvo2-1.fna.fbcdn.net/v/t1.6435-9/36887979_2036780076571300_4985895820164333568_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=09cbfe&_nc_eui2=AeGMf-xclwRz32CWmYdS3jsUkuCD_cUZkzqS4IP9xRmTOrmJlvZ_uwqDR4xJTF0MsC3c_A4SgPv2ZULhBFPiD7pT&_nc_ohc=u1bR7nxRmLwAX-ge0LT&_nc_ht=scontent.fdvo2-1.fna&oh=00_AT9dP_UNsFYCyM32Lo3uHbnDDVnBaHxamjwkKVyc_T9dCw&oe=633762AEss",
      large:
        "https://scontent.fdvo2-1.fna.fbcdn.net/v/t1.6435-9/36887979_2036780076571300_4985895820164333568_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=09cbfe&_nc_eui2=AeGMf-xclwRz32CWmYdS3jsUkuCD_cUZkzqS4IP9xRmTOrmJlvZ_uwqDR4xJTF0MsC3c_A4SgPv2ZULhBFPiD7pT&_nc_ohc=u1bR7nxRmLwAX-ge0LT&_nc_ht=scontent.fdvo2-1.fna&oh=00_AT9dP_UNsFYCyM32Lo3uHbnDDVnBaHxamjwkKVyc_T9dCw&oe=633762AEss",
    },
  },
];

export default data;
