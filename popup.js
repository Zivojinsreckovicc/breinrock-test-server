const countryContent = {
    ca: {
      name: "Canada",
      flag: "imgs/icons/canada.png",
      text: "Users in Canada must be aware of regional financial and legal regulations before proceeding.",
      links: [
        { label: "Terms of Service", url: "policies/ca/ca-termsofservice.html" },
        { label: "Disclaimer", url: "policies/ca/ca-disclaimer.html" }
      ]
    },
    uk: {
        name: "United Kingdom",
        flag: "imgs/icons/uk.png",
        text: "UK-based users are encouraged to review the following documents outlining fraud protection, client rights, financial safeguards, and our regulatory permissions under UK law.",
        links: [
          { label: "APP Fraud Awareness", url: "policies/uk/pushpayment.html" },
          { label: "Complaints", url: "policies/uk/uk-complaints.html" },
          { label: "Contact Details", url: "policies/uk/uk-contact.html" },
          { label: "Customer Vulnerability", url: "policies/uk/uk-vulnerability.html" },
          { label: "Disclaimers & Statements", url: "policies/uk/uk-disclaimers.html" },
          { label: "How Is Your Money Protected?", url: "policies/uk/uk-money-protection.html" },
        ]
      }
      ,
      cy: {
        name: "Cyprus",
        flag: "imgs/icons/cyprus.png",
        text: `Breinrock Ltd, headquartered in Cyprus, serves as the group holding company for the Breinrock entities operating across various jurisdictions.<br><br>
        While our administrative and strategic functions are based at Harmony House, Office 11, 1st Floor, 4 Thekla Lysiotis, 3030 Limassol, Cyprus, this location does not provide any client-facing financial services or account offerings.<br><br>
        All regulated financial services and client accounts are provided exclusively through our licensed entities in other jurisdictions, each operating in compliance with the applicable local laws and regulations.<br><br>
        Clients engaging with Breinrock services are onboarded and supported through these jurisdiction-specific entities, not through the Cyprus head office.<br><br>
        For more information, kindly refer to our contact form or email us at <a href="mailto:compliance@breinrock.com">compliance@breinrock.com</a>.`,
        links: [
          { label: "Contact Form", url: "contact.html" }
        ]
      }
      
      
      ,
      ae: {
        name: "United Arab Emirates",
        flag: "imgs/icons/uae.png",
        text: "Breinrock (DIFC) Tech Ltd is Registered in Dubai International Financial Centre and regulated by Dubai Financial Services Authority for Providing or operating a Payment Account, Issuing Payment Instruments. (DFSA Firm Reference No. F007440) License under Article 48 of the Regulatory Law 2004.<br><br>In accordance with UAE law and regulations, please review the official documentation for use of our payment platform and our complaints handling procedures.",
        links: [
          { label: "Payment Platform Terms (DIFC)", url: "policies/uae/uae-payments-terms.html" },
          { label: "UAE Complaints", url: "policies/uae/uae-complaints.html" }
        ]
      }
      
      
      
      ,
    cz: {
      name: "Czech Republic",
      flag: "imgs/icons/czech.png",
      text: "For Czech users, the following legal and regulatory documents outline your rights, obligations, and the terms of our services. Please review them carefully before proceeding.",
      links: [
        { label: "General Terms and Conditions", url: "policies/cz/cz-general-terms.html" },
        { label: "Pre-contractual Information", url: "policies/cz/cz-precontractual-info.html" },
        { label: "Opening and Managing an Account", url: "policies/cz/cz-account-opening.html" },
        { label: "Payment Account Management", url: "policies/cz/cz-payment-management.html" },
        { label: "Client Payment Methods", url: "policies/cz/cz-client-payments.html" },
        { label: "Top-ups and Payment Info", url: "policies/cz/cz-topups-info.html" },
        { label: "Provider Responsibilities", url: "policies/cz/cz-provider-rights.html" },
        { label: "Client Responsibilities", url: "policies/cz/cz-client-rights.html" },
        { label: "Account Cancellation", url: "policies/cz/cz-account-cancellation.html" },
        { label: "Service Availability", url: "policies/cz/cz-service-availability.html" },
        { label: "Prohibited Client Activities", url: "policies/cz/cz-prohibited-activities.html" },
        { label: "Complaints Process", url: "policies/cz/cz-complaints.html" },
        { label: "Personal Data Protection", url: "policies/cz/cz-data-protection.html" },
        { label: "AML (Anti-Money Laundering)", url: "policies/cz/cz-aml.html" },
        { label: "Final Provisions", url: "policies/cz/cz-final-provisions.html" }
      ]
    }
  };
  
  function openPopup(countryCode) {
    const data = countryContent[countryCode];
    if (!data) return;
  
    // Prevent scrolling on the background
    document.body.classList.add("popup-open");
  
    document.getElementById("popupCountryName").textContent = data.name;
    document.getElementById("popupFlag").src = data.flag;
    document.getElementById("popupFlag").alt = data.name + " Flag";
    document.getElementById("popupDisclaimerText").innerHTML = data.text;

  
    const linksContainer = document.getElementById("popupLinks");
    linksContainer.innerHTML = "";
    data.links.forEach(link => {
      const a = document.createElement("a");
      a.href = link.url;
      a.textContent = link.label;
      a.target = "_blank"; // Optional: open in new tab
      linksContainer.appendChild(a);
    });
  
    document.getElementById("countryPopup").classList.remove("hidden");
  }
  
  function closePopup() {
    document.getElementById("countryPopup").classList.add("hidden");
  
    // Allow scrolling again
    document.body.classList.remove("popup-open");
  }
  
  window.addEventListener("DOMContentLoaded", () => {
    const params = new URLSearchParams(window.location.search);
    const country = params.get("country");
    if (country && countryContent[country]) {
      openPopup(country);
    }
  });
  