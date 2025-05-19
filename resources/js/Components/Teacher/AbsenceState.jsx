import { Check, X, Clock } from 'lucide-react';

const AbsenceState = ({ cef,  handleRadioChange, absenceEntry, disabled }) => {
  return (
    <div className="flex justify-center items-center gap-10">
      {['retard', 'absence', 'Present'].map((type) => {
        const isChecked = absenceEntry?.type === type;
        const iconProps = {
          size: 20,
          className: `cursor-pointer ${
            isChecked
              ? type === 'retard'
                ? 'text-orange-500'
                : type === 'absence'
                ? 'text-red-500'
                : 'text-green-500'
              : 'text-gray-400'
          }`,
        };

        return (
          <div key={`${type}-${cef}`} className="flex items-center gap-2">
            <input
              type="radio"
              id={`${type}-${cef}`}
              className="form-radio h-4 w-4 hidden"
              checked={isChecked}
              onChange={() => handleRadioChange(cef, type)}
              disabled={disabled}
            />
            <label htmlFor={`${type}-${cef}`} className="flex items-center gap-2 cursor-pointer">
              {type === 'retard' && <Clock {...iconProps} />}
              {type === 'absence' && <X {...iconProps} />}
              {type === 'Present' && <Check {...iconProps} />}
              <span
                className={
                  isChecked
                    ? type === 'retard'
                      ? 'text-orange-500'
                      : type === 'absence'
                      ? 'text-red-500'
                      : 'text-green-500'
                    : 'text-gray-700 dark:text-gray-50'
                }
              >
                {type.charAt(0).toUpperCase() + type.slice(1)}
              </span>
            </label>
          </div>
        );
      })}
    </div>
  );
};

export default AbsenceState;