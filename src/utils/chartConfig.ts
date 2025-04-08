
/**
 * Configuration for various chart types used in the application
 */

// GPA chart configuration
export const gpaChartConfig = {
  margins: {
    yearlyGPA: { top: 20, right: 50, bottom: 20, left: 120 },
    cgpa: { top: 5, right: 30, bottom: 5, left: 5 }
  },
  barStyle: {
    yearlyGPA: {
      fill: "#7dd364",
      radius: [0, 4, 4, 0] as [number, number, number, number],
      barSize: 30
    },
    cgpa: {
      fill: "#7dd364",
      radius: [4, 4, 4, 4] as [number, number, number, number],
      barSize: 30
    }
  },
  axisConfig: {
    yearlyGPA: {
      x: {
        tickCount: 6
      },
      y: {
        width: 120,
        fontSize: 12
      }
    },
    cgpa: {
      x: {
        tickCount: 6,
        fontSize: 12
      }
    }
  },
  labelConfig: {
    position: "right" as const, // Use const assertion to ensure correct type
    formatter: (value: number) => value.toFixed(2),
    style: { fontSize: '12px' }
  }
};

// Common chart colors
export const chartColors = {
  completed: "#7dd364",
  inProgress: "#7c9fdb",
  unfulfilled: "#ff6b6b"
};
