export const requestObj = {
  method: 'GET',
  headers: {
    "X-API-Key": "QkGVtAefP8C1tZwkQi1hRk87rZxqxR4vptsp2tms"

  }
}

export const searchFields = [
  { key: "gender", label: "Gender", placeholder: "Female or Male" },
  { key: "first_name", label: "First Name", placeholder: "Barack" },
  { key: "last_name", label: "Last Name", placeholder: "Obama" },
  { key: "party", label: "Party", placeholder: 'Democrat or Republican' }
];

export const handleGenderAndParty = (text) => {
  if (text === 'female') {
    return 'f';
  }
  if (text === 'male') {
    return 'm'
  }
  if (text === 'republican') {
    return 'r'
  }
  if (text === 'democrat') {
    return 'd'
  }
  return text;
}
export const data = [
  {
    chamber: "senate",
  },
  { chamber: "house" },
];