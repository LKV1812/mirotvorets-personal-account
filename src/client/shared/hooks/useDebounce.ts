import React, { useState, useEffect, useCallback } from 'react';

const useDebounce = (value: any, delay: number) => {
    const [debouncedValue, setDebouncedValue] = useState(value);

    useEffect(() => {
        const timer = setTimeout(() => {
            setDebouncedValue(value);
        }, delay);

        return () => {
            clearTimeout(timer);
        };
    }, [value, delay]);

    return debouncedValue;
};

// пример использования
/*
const MyComponent: React.FC = () => {
    const [inputValue, setInputValue] = useState('');
    const debouncedInputValue = useDebounce(inputValue, 500);

    const handleChange = useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
        setInputValue(event.target.value);
    }, []);

    useEffect(() => {
        // Здесь можно выполнить необходимые действия с использованием debouncedInputValue,
        // например, отправить запрос на сервер или выполнить фильтрацию данных.
        console.log('Debounced value:', debouncedInputValue);
    }, [debouncedInputValue]);

    return (
        <div>
            <input type="text" value={inputValue} onChange={handleChange} />
    </div>
);
};

export default MyComponent;
*/

// Тест

/*
import React from 'react';
import { mount } from 'enzyme';
import MyComponent from './MyComponent';

jest.useFakeTimers(); // Используем фейковые таймеры для тестирования debounce

describe('MyComponent', () => {
  it('should debounce input value', () => {
    const wrapper = mount(<MyComponent />);
    const input = wrapper.find('input');

    // Симулируем изменение значения поля ввода
    input.simulate('change', { target: { value: 'Hello' } });
    expect(wrapper.find('input').props().value).toEqual('Hello');

    // Продвигаем таймер на 500 миллисекунд
    jest.advanceTimersByTime(500);

    // Убеждаемся, что значение input после debounce обновилось
    expect(wrapper.find('input').props().value).toEqual('Hello');

    // Симулируем изменение значения поля ввода второй раз
    input.simulate('change', { target: { value: 'World' } });
    expect(wrapper.find('input').props().value).toEqual('World');

    // Продвигаем таймер на 500 миллисекунд
    jest.advanceTimersByTime(500);

    // Убеждаемся, что значение input после debounce обновилось
    expect(wrapper.find('input').props().value).toEqual('World');
  });
});
*/
