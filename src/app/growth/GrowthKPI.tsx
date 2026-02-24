const stats = [
  { value: '42%', label: 'Increase in Campaign ROI' },
  { value: '28%', label: 'Reduced Inventory Waste' },
  { value: '3x', label: 'Faster Decision Making' },
  { value: '100%', label: 'Real-Time Visibility' },
];

const GrowthKPI = () => {
  return (
    <section className="py-[100px]">
      <div className="main-container grid grid-cols-1 gap-6 md:grid-cols-4">
        {stats.map((item, index) => (
          <div
            key={index}
            className="rounded-2xl bg-ns-ivory dark:bg-background-6 p-8 text-center shadow-sm"
          >
            <h3 className="text-heading-3 text-ns-linen">{item.value}</h3>
            <p className="mt-2 text-secondary dark:text-accent/80">{item.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default GrowthKPI;
