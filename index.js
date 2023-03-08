const AWS = require('aws-sdk');
const S3 = new AWS.S3();

exports.handler = async (event) => {
  let images = [];

  let Bucket = event.Records[0].s3.bucket.name;
  const Key = event.Records[0].s3.object.key;
  const name = event.Records[0].s3.object.name;
  const url = event.Records[0].s3.object.url;
  const size = event.Records[0].s3.object.size;
  const type = event.Records[0].s3.object.type;
  // const type = '.jpg';

  const imgObj = { name, url, size, type };
  console.log('Image object', imgObj);

  let imageParams = {
    Bucket: 'image-lambda-cleland',
    Key: 'images.json',
  };

  try {
    let imageData = await S3.getObject(imageParams).promise();
    images = JSON.parse(imageData.Body.toString());
    console.log('Image Array', images);
  } catch (error) {
    console.log(error.messasge);
  }

  images.push(imgObj);
  imageParams.Body = JSON.stringify(images);

  try {
    await S3.putObject(imageParams).promise();
  } catch (error) {
    console.log(error.message);
  }

  const response = {
    statusCode: 200,
    body: imageParams.Body,
  };
  return response;
};
