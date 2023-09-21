import React from "react";
import {PropTypes} from "prop-types";

import Tag from "./Tag";

const DATA = "data:image/webp;base64,UklGRl4EAABXRUJQVlA4WAoAAAAQAAAA3gAANQAAQUxQSOkAAAABkCvbtmlbtm3btm07cmRE9r2REdnWs23btm2/8QEPI42ICRD4I+vwH/1HVIKbCnBTCm4KfnOT/xvU5P4GNVk/QU3mT1CT+hPUJH0HNbHfQE3UN1AT/hXUhHwCNf6fQI3PR1Dj+Q7UuL0FNc5vQY3DK1Bj+xzUWD0HNeZPQI3pI1Bj/ADUGNwDNbq3QY3ODVCjdQ3UqF8BNaoXQY3KOVCjeBrUyJ8ANfJHQY3sIVAjtR/USO0BNZLbQY3YFlAjtgnUiK0FNSLLoEZ4AdQIT4MaoTFQIzgCagQHQI1gP7jpBjft4KYN3DaBXABWUDggTgMAAPAUAJ0BKt8ANgA+bTCWR6QioiErcNmQgA2JQQ4BkAT4BaTzO/duym7Hlp4HlVP1Ry9wzogHSwbxJ+3X7e+zHq2jmU0F/O5Yqm8l5ESTt11sQv2hFBn0shZj7h10F9MM8nk1qwvrlpFwdJ3qt9WPQuWRkrtFNbGEnzGVe2VlkcAlObBD4bfdS+T6Zu5dvYWd/fReO/ERJybpuvX5bOTaZGq9fuoJoL028rvP0uuosn5AAP7RxsGsjR56w5go74/vpsvOR098l+LaP8++/c/v3P1CSwqw//PbBun7zEFT49EuyQMz0lHNtGVdoyTajQzySt2G01+cUnFOUA38aMZWQ4/uvLeObAaXp4m5v+mfXZq3v7tfAZ6zQPa1bRrEYje/Pk63eXfPdYoN9TkrFAO4t6Fl0F4qhnzj0jPxvNVpuN5qN6raTuVDbHr7ATzFzzZduqEVTVSlZtPorbek4fh/f+QW8rwAjfJN99MqrCGAqh/KqZXLVwpm/W7RMAoLZLjre6LZSRV20SLv1L/YK70a0w8EEufkHJmQ6FLDSXPPHAS1zd6MPBZEy8HW2JED0kgBfb2tD38wUsfmfwuCjZaGea1F+P6iSUSyOBo5mffhPqku8ZP42/mvYQ9rpMcszykUREmNZZ1OvdgpxQRE8b8NQ9xjuovNKJ6RiDkPTV1vPVbidncDh37BUqR+IQCuOifX8n+/P376IKHsfCja5wPvqrYD1H8xi9aEFlqm+S8wOd4YlifMWa0vr9fzS+bRyjocl15UrI83Bmilryqn5JTCd1d3+bxT3lxNw+4NnHJ1vEJ0kHP2bGCM7TOzx+bLRaAAbC9m08AIdR7vKLwrzA3EzyxgDw7O+QnsAjquea9M6+er6XFcY/fNBJtnl2Ua8phbZe7ZMwefRt9CHGWQnDvq+28fnecj127R+lKbPFbamxAlr/B5ueXfF9rxXJL+tHLr6v/KkXUtcBW0uJakKkOZ9dPnFCfyZbnxLDzGhyoWu0ipudPsY4tbYmH9prjnx9/+ArvZ5d7eH4FaC3X5d0sqsr4j9bfoZ7vNTFYM9P6/5/5gf9twYG1NXwgZtYWma4MQAA1pvfFnHnhBtH31gdCQGFlMtrDZV3qWuP/YXmAAAA==";

function UR({className}) {
  return (
    <Tag data={DATA} className={className}/>
  );
}

UR.propTypes = {
  className: PropTypes.string,
};

UR.defaultProps = {
  className: "",
};

export default UR
