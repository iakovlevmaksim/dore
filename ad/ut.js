// Config with Vega-Lite only config removed.
// Assuming your original code looked something like this:

const config = {
    // Vega-Lite configuration properties here
    width: 800,
    height: 600,
    mark: 'bar',
    encoding: {
        x: { field: 'category', type: 'nominal' },
        y: { field: 'value', type: 'quantitative' }
    }
};

// Now, removing Vega-Lite specific configuration
const configWithoutVegaLite = {
    width: 800,
    height: 600
    // Other properties as needed for your specific use case
    // You can add additional properties here as per your requirements
};
