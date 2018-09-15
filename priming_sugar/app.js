exports.lambdaHandler = async (event, context) => {
  let response;
  const data = JSON.parse(event.body);
  const volumeOfBeer = data.volumeOfBeer;
  const volumeCO2 = data.volumeCO2;
  const fermentationTemp = data.fermentationTemp;

  const primingInGrams = roundToTwo(15.195 * volumeOfBeer * (volumeCO2 - 3.0378 + (0.050062 * fermentationTemp) - (0.00026555 * fermentationTemp ** 2)));
  const primingInOz = primingInGrams / 28.34952;


  try {
    response = {
      'statusCode': 200,
      'body': JSON.stringify({
        'message': {
          'corn_sugar': {
            'grams': primingInGrams,
            'ounces': primingInOz
          }
        }
      })
    }
  } catch (err) {
    console.log(err);
    return err;
  }

  return response;
};

function roundToTwo(number) {
  return + (Math.round(number + "e+2") + "e-2");
}
