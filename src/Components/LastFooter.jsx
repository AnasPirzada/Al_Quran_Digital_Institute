import React from 'react';

function LastFooter() {
  return (
    <>
      <section className='px-5 py-3'>
        <div className=' flex justify-between'>
          <div>
            <h3>© 2024 Smart Quran Institute</h3>
          </div>

          <div className='flex'>
            <a
              href='http://youtube.com/channel/UCuIPXx106-Ifvq6VD3ecJ4A'
              target='_blank'
              rel='noopener noreferrer'
            >
              <img src='/Youtube.svg' className='w-10' alt='' />
            </a>{' '}
            <a
              href='https://join.skype.com/invite/BOf0VvMKyAVe'
              target='_blank'
              rel='noopener noreferrer'
            >
              <img src='/skype.svg' className='w-10' alt='' />
            </a>
            {/* <img src='/instagram.svg' className='w-10' alt='' /> */}
            <a
              href='https://www.facebook.com/profile.php?id=100083203658283'
              target='_blank'
              rel='noopener noreferrer'
            >
              <img src='/facebook-logo.svg' className='w-10' alt='' />
            </a>
          </div>
          <div className=' flex gap-3'>
            <img src='/logos_mastercard.png' alt='logo' />
            <img src='/Layer_1.png' alt='logo' />
          </div>
        </div>
      </section>
    </>
  );
}

export default LastFooter;
