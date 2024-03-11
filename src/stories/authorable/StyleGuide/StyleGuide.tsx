//--- This File Do not need to scafold
import React from 'react';

export type styleGuideProps = {
  type: 'typography' | 'color';
};

const StyleGuide = ({ type }: styleGuideProps) => {
  return (
    <div>
      {type === 'typography' && (
        <div className="py-10">
          <div className="border rounded-lg my-4 mx-1">
            <h1 className="text-center text-6xl">Typo graphy</h1>
            <div>
              {[
                'font-thin',
                'font-extralight',
                'font-light',
                'font-regular',
                'font-medium',
                'font-semibold',
                'font-bold',
                'font-extrabold',
                'font-black',
              ].map((fw, i) => (
                <div key={'fw' + i} className="flex items-center py-3">
                  <p className={`text-10 leading-[1.25em] font-poppin ${fw} basis-1/2`}>
                    Poppins - {fw.split('-')[1] ?? 'font'}
                  </p>
                  <span className="text-[20px]">{fw}</span>
                </div>
              ))}
            </div>
          </div>
          <div>
            <div className="flex items-center justify-between">
              <h1 className="basis-1/3">This is H1 text</h1>
              <p className="basis-1/3">
                <span>.text-heading-1</span>{' '}
              </p>
              <p className="basis-1/3">
                Consist of ( font/ line height / charactor spacing ):<span>48px / 60px / 0</span>
              </p>
            </div>
            <div className="flex items-center justify-between">
              <h2 className="basis-1/3">This is H2 text</h2>
              <p className="basis-1/3">
                <span>.text-heading-2</span>{' '}
              </p>
              <p className="basis-1/3">
                Consist of ( font/ line height / charactor spacing ):<span>40px / 46px / 0</span>
              </p>
            </div>
            <div className="flex items-center justify-between">
              <h3 className="basis-1/3">This is H3 text</h3>
              <p className="basis-1/3">
                <span>.text-heading-3</span>{' '}
              </p>
              <p className="basis-1/3">
                Consist of ( font/ line height / charactor spacing ):<span>36px / 42px / 0</span>
              </p>
            </div>
            <div className="flex items-center justify-between">
              <h4 className="basis-1/3">This is H4 text</h4>
              <p className="basis-1/3">
                <span>.text-heading-4</span>{' '}
              </p>
              <p className="basis-1/3">
                Consist of ( font/ line height / charactor spacing ):<span>26px / 30px / 0</span>
              </p>
            </div>
            <div className="flex items-center justify-between">
              <h5 className="basis-1/3">This is H5 text</h5>
              <p className="basis-1/3">
                <span>.text-heading-5</span>{' '}
              </p>
              <p className="basis-1/3">
                Consist of ( font/ line height / charactor spacing ):<span>22px / 26px / 0</span>
              </p>
            </div>
            <div className="flex items-center justify-between">
              <h6 className="basis-1/3">This is H6 text</h6>
              <p className="basis-1/3">
                <span>.text-heading-5</span>{' '}
              </p>
              <p className="basis-1/3">
                Consist of ( font/ line height / charactor spacing ):<span>22px / 26px / 0</span>
              </p>
            </div>
            <br />
            <hr />
            <br />
            <div className="flex items-center justify-between">
              <p className="basis-1/3">This is paragraph</p>
              <p className="basis-1/3">
                <span>.text-body</span>{' '}
              </p>
              <p className="basis-1/3">
                Consist of ( font/ line height / charactor spacing ):<span>16px / 20px / 0</span>
              </p>
            </div>
            <div className="flex items-center justify-between">
              <span className="basis-1/3">This is span</span>
              <p className="basis-1/3">
                <span>.text-body</span>{' '}
              </p>
              <p className="basis-1/3">
                Consist of ( font/ line height / charactor spacing ):<span>16px / 20px / 0</span>
              </p>
            </div>
            <div className="flex items-center justify-between">
              <span className="basis-1/3 text-body-small">This is small body font</span>
              <p className="basis-1/3">
                <span>.text-body-small</span>{' '}
              </p>
              <p className="basis-1/3">
                Consist of ( font/ line height / charactor spacing ):<span>14px / 20px / 0</span>
              </p>
            </div>
            <br />
            <hr />
            <br />
            <div className="flex items-center justify-between">
              <p className="basis-1/3 text-intro">This is intro Font</p>
              <p className="basis-1/3">
                <span>.text-intro</span>{' '}
              </p>
              <p className="basis-1/3">
                Consist of ( font/ line height / charactor spacing ):<span>18px / 28px / 0</span>
              </p>
            </div>
          </div>
        </div>
      )}
      {type === 'color' && (
        <div>
          {/* --- Green color --- */}
          <div className="border-b-2 py-3">
            <h3 className="text-xl my-2 flex items-center">
              Primary Green{' '}
              <span className="text-secondary-gray-dark ml-2 flex- items-center">
                .primary-green-[tint/shade]
              </span>
            </h3>
            <div className="flex">
              {[
                'bg-primary-green-tint-100',
                'bg-primary-green-tint-200',
                'bg-primary-green-tint-300',
                'bg-primary-green-tint-400',
                'bg-primary-green',
                'bg-primary-green-shade-100',
                'bg-primary-green-shade-200',
                'bg-primary-green-shade-300',
                'bg-primary-green-shade-400',
              ].map((color) => (
                <div key={color} className="mx-1 flex flex-col items-center">
                  <div className={`${color} rounded-full w-10 h-10`}></div>
                  <span className="text-primary-less-black text-center">
                    {color.split('bg-primary-green-')[1]}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* --- Blue color --- */}
          <div className="border-b-2 py-3">
            <h3 className="text-xl my-2">
              Primary Blue{' '}
              <span className="text-secondary-gray-dark ml-2 flex- items-center">
                .primary-blue-[tint/shade]
              </span>
            </h3>
            <div className="flex">
              {[
                'bg-primary-blue-tint-100',
                'bg-primary-blue-tint-200',
                'bg-primary-blue-tint-300',
                'bg-primary-blue-tint-400',
                'bg-primary-blue',
                'bg-primary-blue-shade-100',
                'bg-primary-blue-shade-200',
                'bg-primary-blue-shade-300',
                'bg-primary-blue-shade-400',
              ].map((color) => (
                <div key={color} className="mx-1 flex flex-col items-center">
                  <div className={`${color} rounded-full w-10 h-10`}></div>
                  <span className="text-primary-less-black text-center">
                    {color.split('bg-primary-blue-')[1]}
                  </span>
                </div>
              ))}
            </div>
          </div>
          {/* --- Gray color --- */}
          <div className="border-b-2 py-3">
            <h3 className="text-xl my-2 flex- items-center">
              Primary Gray
              <span className="text-secondary-gray-dark ml-2">.primary-gray-[tint/shade]</span>
            </h3>
            <div className="flex">
              {[
                'bg-primary-gray-tint-100',
                'bg-primary-gray-tint-200',
                'bg-primary-gray-tint-300',
                'bg-primary-gray-tint-400',
              ].map((color) => (
                <div key={color} className="mx-1 flex flex-col items-center">
                  <div className={`${color} rounded-full w-10 h-10`}></div>
                  <span className="text-primary-less-black text-center">
                    {color.split('bg-primary-gray-')[1]}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* --- Primary Black/ white color --- */}
          <div className="border-b-2 py-3">
            <h3 className="text-xl my-2">Primary Black / white</h3>
            <div className="flex">
              {['bg-primary-less-black', 'bg-primary-white'].map((color) => (
                <div key={color} className="mx-1 flex flex-col items-center">
                  <div className={`${color} rounded-full w-10 h-10 border`}></div>
                  <span className="text-primary-less-black text-center">{color}</span>
                </div>
              ))}
            </div>
          </div>

          {/* --- Secondary Gray color --- */}
          <div className="border-b-2 py-3">
            <h3 className="text-xl my-2 flex items-center">
              Secondary Green{' '}
              <span className="text-secondary-gray-dark ml-2 flex- items-center">
                .secondary-green-[tint/shade]
              </span>
            </h3>
            <div className="flex">
              {['bg-secondary-green-dark', 'bg-secondary-green-aqua'].map((color) => (
                <div key={color} className="mx-3 flex flex-col items-center">
                  <div className={`${color} rounded-full w-10 h-10`}></div>
                  <span className="text-primary-less-black text-center">
                    {color.split('bg-secondary-green-')[1]}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* --- Secondary Green color --- */}
          <div className="border-b-2 py-3">
            <h3 className="text-xl my-2 flex items-center">
              Secondary Gray{' '}
              <span className="text-secondary-gray-dark ml-2 flex- items-center">
                .secondary-gray-[tint/shade]
              </span>
            </h3>
            <div className="flex">
              {['bg-secondary-gray-dark', 'bg-secondary-gray-light'].map((color) => (
                <div key={color} className="mx-1 flex flex-col items-center">
                  <div className={`${color} rounded-full w-10 h-10`}></div>
                  <span className="text-primary-less-black text-center">
                    {color.split('bg-secondary-gray-')[1]}
                  </span>
                </div>
              ))}
            </div>
          </div>
          {/* --- Special color --- */}
          <div className="border-b-2 py-3">
            <h3 className="text-xl my-2 flex items-center">
              Special Color
              <span className="text-secondary-gray-dark ml-2 flex- items-center">
                .special-[tint/shade]
              </span>
            </h3>
            <div className="flex">
              {['bg-special-success', 'bg-special-warning', 'bg-special-error'].map((color) => (
                <div key={color} className="mx-4 flex flex-col items-center">
                  <div className={`${color} rounded-full w-10 h-10`}></div>
                  <span className="text-primary-less-black text-center">
                    {color.split('bg-special-')[1]}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default StyleGuide;
