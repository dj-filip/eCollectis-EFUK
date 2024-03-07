export const combineProviders = (providers) =>
  providers.reduce(
    (Combined, [Provider, props = {}]) =>
      ({ children }) =>
        (
          <Combined>
            <Provider {...props}>{children}</Provider>
          </Combined>
        ),
    ({ children }) => <>{children}</>
  );
