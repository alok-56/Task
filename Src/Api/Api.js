//------------------All Categrious--------------------//

import {BaseUrl} from './BaseUrl';

export const CATEGORY = async () => {
  try {
    let result = await fetch(`${BaseUrl}/Product/DashBoard`, {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({
        CategoryId: 0,
        DeviceManufacturer: 'Google',
        DeviceModel: 'Android SDK built for x86',
        DeviceToken: '',
        PageIndex: 1,
      }),
    });
    result = await result.json();
    return result;
  } catch (error) {
    return error;
  }
};

export const SUBCATEGORY = async (categoryId, pageIndex) => {
  try {
    const response = await fetch(
      `${BaseUrl}/Product/DashBoard?CategoryId=${categoryId}&PageIndex=${pageIndex}`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          CategoryId: categoryId,
          PageIndex: pageIndex,
        }),
      },
    );
    result = await response.json();
    return result;
  } catch (error) {
    return error;
  }
};
