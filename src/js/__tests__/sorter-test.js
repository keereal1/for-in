import orderByProps from '../sorter'

test('testing object sorting', () => {
    const obj = {name: 'мечник', health: 10, level: 2, attack: 80, defence: 40};
    const result = orderByProps(obj, ['name', 'level'])
    const finalArray = [
        {key: "name", value: "мечник"}, 
        {key: "level", value: 2}, 
        {key: "attack", value: 80}, 
        {key: "defence", value: 40}, 
        {key: "health", value: 10}
      ]
    expect(result).toEqual(finalArray)
}) 