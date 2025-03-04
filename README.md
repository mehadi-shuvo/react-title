# useTitle Hook

![License](https://img.shields.io/badge/license-MIT-blue)
![Version](https://img.shields.io/badge/version-1.0.0-green)
![React](https://img.shields.io/badge/react-%5E17.0.0%20%7C%7C%20%5E18.0.0-blue)

A custom React hook to dynamically update the document title. Perfect for single-page applications (SPAs) where the title needs to change based on the current page or context.

---

## Installation

Install the package using npm or yarn:

```bash
npm install use-title-hook
```

```bash
yarn add use-title-hook
```

---

## Key Features

- **Dynamic Title Updates**: Easily update the document title based on the current page or state.
- **Default Title**: Set a fallback title if no title is provided.
- **Prefix and Suffix**: Add a prefix or suffix to the title (e.g., `My App - Home`).
- **Custom Separator**: Customize the separator between the title and prefix/suffix.
- **Template Support**: Use templates for dynamic titles (e.g., `{title} | My App`).
- **Title Restoration**: Automatically restores the previous title when the component unmounts.
- **TypeScript Support**: Fully typed for a great developer experience.

---

## Usage

### Basic Example

```tsx
import React from "react";
import useTitle from "use-title-hook";

const HomePage: React.FC = () => {
  useTitle("Home");

  return (
    <div>
      <h1>Welcome to the Home Page</h1>
    </div>
  );
};

export default HomePage;
```

### Advanced Example

```tsx
import React from "react";
import useTitle from "use-title-hook";

const ProfilePage: React.FC = () => {
  useTitle("Profile", {
    defaultTitle: "My App",
    prefix: "My App",
    suffix: "Dashboard",
    separator: " | ",
    template: "{title} - {prefix}",
  });

  return (
    <div>
      <h1>Profile Page</h1>
      <p>Check the browser tab title!</p>
    </div>
  );
};

export default ProfilePage;
```

---

## API

### `useTitle(title: string, options?: UseTitleOptions)`

#### Parameters

- **`title`** (`string`): The title to set. If empty, the `defaultTitle` will be used.
- **`options`** (`object`, optional):
  - `defaultTitle` (`string`): Fallback title if `title` is empty. Default: `'My App'`.
  - `prefix` (`string`): Text to prepend to the title.
  - `suffix` (`string`): Text to append to the title.
  - `separator` (`string`): Separator between title and prefix/suffix. Default: `' - '`.
  - `template` (`string`): Template for dynamic titles. Use `{title}` to insert the title. Default: `'{title}'`.

---

## Examples

### 1. Default Title

```tsx
useTitle("", { defaultTitle: "My App" });
// Sets title to "My App"
```

### 2. Prefix and Suffix

```tsx
useTitle("Home", { prefix: "My App", suffix: "Dashboard" });
// Sets title to "My App - Home - Dashboard"
```

### 3. Custom Separator

```tsx
useTitle("Home", { prefix: "My App", separator: " | " });
// Sets title to "My App | Home"
```

### 4. Template Support

```tsx
useTitle("Profile", { template: "{title} | My App" });
// Sets title to "Profile | My App"
```

---

## Contributing

Contributions are welcome! If you find a bug or want to suggest a feature, please open an issue or submit a pull request.

1. Fork the repository.
2. Create a new branch (`git checkout -b feature/YourFeature`).
3. Commit your changes (`git commit -m 'Add some feature'`).
4. Push to the branch (`git push origin feature/YourFeature`).
5. Open a pull request.

---

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

---

## Support

If you find this package useful, please consider giving it a ⭐️ on [GitHub](https://github.com/your-username/use-title-hook). For any questions or issues, feel free to open an issue.

---

Made with ❤️ by [Your Name](https://github.com/your-username)
