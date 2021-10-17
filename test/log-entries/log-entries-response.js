export default function exampleResponse() {
  const logEntries = {
    data: [
      {
        id: '550e8400-e29b-41d4-a716-446655440000',
        type: 'meal',
        attributes: {
          childId: '5ee62461-adb8-4618-a110-06290a787223',
          time: 1625997840,
          description: 'Yogurt with strawberries',
          amount: 100,
          unit: 'percentage'
        },
        links: {
          iconURL:
            'https://katydid-web-client.s3.us-east-2.amazonaws.com/icons/meal-icon.svg'
        }
      },
      {
        id: '550e8400-e29b-41d4-a716-446655441234',
        type: 'nap',
        attributes: {
          childId: '5ee62461-adb8-4618-a110-06290a787223',
          time: 1625997840,
          duration: 59
        },
        links: {
          iconURL:
            'https://katydid-web-client.s3.us-east-2.amazonaws.com/icons/nap-icon.svg'
        }
      }
    ]
  };
  return logEntries;
}
