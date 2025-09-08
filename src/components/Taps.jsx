import * as React from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";

// Panel Component
function CustomTabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`tab-panel-${index}`}
      aria-labelledby={`tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box
          sx={{
            p: 3,
            maxHeight: 350,
            overflowY: "auto",
            color: "rgba(255,255,255,0.8)", // النصوص جوا البانل
            fontSize: "0.9rem",
            lineHeight: 1.6,
            // ستايل السكرول
            "&::-webkit-scrollbar": {
              width: "8px",
            },
            "&::-webkit-scrollbar-track": {
              backgroundColor: "rgba(255,255,255,0.08)",
              borderRadius: "4px",
            },
            "&::-webkit-scrollbar-thumb": {
              backgroundColor: "rgba(239,68,68,0.6)", // أحمر شفاف
              borderRadius: "4px",
            },
            "&::-webkit-scrollbar-thumb:hover": {
              backgroundColor: "rgba(239,68,68,0.85)",
            },
          }}
        >
          {children}
        </Box>
      )}
    </div>
  );
}

CustomTabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `tab-${index}`,
    "aria-controls": `tab-panel-${index}`,
  };
}

// === Reusable Component ===
export default function Taps({ tabs }) {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
   <Box
      sx={{
        width: "100%",
        pb: 4,
        backdropFilter: "blur(12px)",
        WebkitBackdropFilter: "blur(12px)",
        borderRadius: "12px",
        fontSize: "0.9rem",
        boxShadow: "0 4px 20px rgba(0,0,0,0.4)",
      }}
      className="bg-gradient-to-br from-gray-900 to-gray-950"
    >
      {/* Tabs Bar */}
      <Box sx={{ borderBottom: 1, borderColor: "rgba(255,255,255,0.1)" }}>
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="tabs"
          variant="scrollable"
          scrollButtons="auto"
          sx={{
            "& .MuiTab-root": {
              color: "rgba(255,255,255,0.6)", // رمادي فاتح
              fontWeight: "600",
              fontSize: "0.9rem",
              minWidth: "auto",
              padding: "0.8rem 1.5rem",
              transition: "all 0.3s ease",
              textTransform: "none",
            },
            "& .MuiTab-root:hover": {
              color: "#ffffff", // أبيض عند hover
            },
            "& .MuiTab-root.Mui-selected": {
              color: "#ef4444", // أحمر أساسي للمختار
            },
            "& .MuiTabs-indicator": {
              backgroundColor: "#ef4444", // أحمر للـ indicator
              height: "3px",
              borderRadius: "2px",
              transition: "all 0.3s ease",
            },
          }}
        >
          {tabs.map((tab, index) => (
            <Tab
              key={index}
              label={tab.label}
              {...a11yProps(index)}
              sx={{
                minWidth: "auto",
                px: 2,
              }}
            />
          ))}
        </Tabs>
      </Box>

      {/* Panels */}
      {tabs.map((tab, index) => (
        <CustomTabPanel key={index} value={value} index={index}>
          {tab.content}
        </CustomTabPanel>
      ))}
    </Box>
  );
}

Taps.propTypes = {
  tabs: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      content: PropTypes.node.isRequired,
    })
  ).isRequired,
};
