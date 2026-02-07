#!/bin/bash

# Weekly Crypto Regulatory Monitor Runner
# This script helps you run the weekly monitoring with Claude Code

# Color codes for output
GREEN='\033[0;32m'
BLUE='\033[0;34m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

echo -e "${BLUE}=======================================${NC}"
echo -e "${BLUE}  Weekly Crypto Regulatory Monitor${NC}"
echo -e "${BLUE}=======================================${NC}"
echo ""

# Calculate date range
END_DATE=$(date +%Y-%m-%d)
START_DATE=$(date -d '7 days ago' +%Y-%m-%d)
CURRENT_DATE=$(date +"%B %d, %Y")

echo -e "${GREEN}Monitoring Period:${NC} $START_DATE to $END_DATE"
echo ""

# Check if we're in the right directory
if [ ! -d ".git" ]; then
    echo -e "${YELLOW}Warning: Not in a git repository. Please run from the root of thecod3x repository.${NC}"
    exit 1
fi

# Create automation directory if it doesn't exist
mkdir -p .automation/reports

# Generate report filename
REPORT_FILE=".automation/reports/report-$END_DATE.md"

echo -e "${BLUE}Step 1:${NC} Running Claude Code monitoring..."
echo ""

# Prepare the monitoring prompt with dates filled in
MONITORING_PROMPT=$(cat << EOF
Please execute the weekly crypto regulatory monitoring task using the instructions in weekly-crypto-monitor.md.

Today's date: $CURRENT_DATE
Monitoring period: $START_DATE to $END_DATE

After completing your monitoring and evaluation, save your findings report to: $REPORT_FILE

Then provide me with:
1. A summary of significant developments found (if any)
2. Your recommendation on whether to create a PR
3. If creating a PR, show me the proposed changes before executing git commands
EOF
)

# Run Claude Code
echo "$MONITORING_PROMPT" | claude

echo ""
echo -e "${BLUE}=======================================${NC}"
echo -e "${GREEN}Monitoring Complete!${NC}"
echo -e "${BLUE}=======================================${NC}"
echo ""
echo -e "Report saved to: ${YELLOW}$REPORT_FILE${NC}"
echo ""
echo "Next steps:"
echo "1. Review the report and any proposed changes"
echo "2. If you approve a PR, Claude Code will have created a branch and opened it"
echo "3. Review the PR on GitHub and merge if satisfied"
echo ""
