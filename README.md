# LAB - Class 17 AWS: Image Lambda

## Project: Image Lambda

### Author: Jeremy Cleland

### Problem Domain

- Create an S3 Bucket with “open” read permissions, so that anyone can see the images/files in their browser.
  - A user should be able to upload an image at any size, and update a dictionary of all images that have been uploaded so far.
  - When an image is uploaded to your S3 bucket, it should trigger a Lambda function which must:
  - Download a file called “images.json” from the S3 Bucket if it exists.

  - The images.json should be an array of objects, each representing an image. Create an empty array if this file is not present.

- Create a metadata object describing the image.
  - Name, URL, Size, Type, etc.
  - Append the data for this image to the array.

### Links and Resources

- [GUI DEPLOYMENT](http://cloudserver-env.eba-p9epswmi.us-east-1.elasticbeanstalk.com/)
