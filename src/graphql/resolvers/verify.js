import crypto from 'crypto';
import Nexmo from 'nexmo';
import { VerifyApi } from '../../models';
import { validateMobileNumber } from '../../util/validators';
import { UserInputError } from 'apollo-server-core';

const nexmo = new Nexmo(
  {
    apiKey: '094bfab7',
    apiSecret: '7WNOo8xThZ1NUDZ4'
  },
  { debug: true }
);

export default {
  Mutation: {
    async verifyMessage(_, { mobileNumber }) {
      const text = crypto
        .randomBytes(3)
        .toString('hex')
        .toUpperCase();

      const from = 'NEXMO';

      const { errors, valid } = validateMobileNumber(mobileNumber);

      if (!valid) {
        throw new UserInputError('Errors', { errors });
      }
      try {
        // nexmo.message.sendSms(
        //   from,
        //   mobileNumber,
        //   text,
        //   async (err, responseData) => {
        //     if (err) {
        //       console.log(err);
        //       return false;
        //     } else {
        //       if (responseData.messages[0]['status'] === '0') {
        //         const response = new VerifyApi({
        //           key: text,
        //           mobileNumber
        //         });

        //         await response.save();
        //         console.log('Message sent successfully.');
        //       } else {
        //         console.log(
        //           `Message failed with error: ${responseData.messages[0]['error-text']}`
        //         );
        //         return `Message failed with error: ${responseData.messages[0]['error-text']}`;
        //       }
        //     }
        //   }
        // );

        const response = new VerifyApi({
          key: text,
          mobileNumber: '234'.concat(mobileNumber)
        });

        await response.save();

        return text;
      } catch (err) {
        console.log(err);
        throw new Error(err);
      }
    }
  }
};
