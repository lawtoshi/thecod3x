# thecod3x Weekly Monitoring Automation

This directory contains the automation setup for monitoring crypto regulatory developments and updating thecod3x.com.

## Overview

The system uses Claude Code to:
1. Search for new regulatory developments across multiple sources
2. Evaluate their significance
3. Draft updates to relevant pages
4. Create pull requests for review

## Files in This Directory

- **`weekly-crypto-monitor.md`** - Detailed instructions for Claude Code on what to monitor and how to evaluate significance
- **`run-weekly-monitor.sh`** - Shell script to easily run the weekly monitoring
- **`reports/`** - Directory where monitoring reports are saved

## Quick Start

### First Time Setup

1. Make sure Claude Code is installed:
   ```bash
   claude-code --version
   ```

2. Set your Anthropic API key:
   ```bash
   export ANTHROPIC_API_KEY='your-api-key-here'
   # Add to ~/.bashrc or ~/.zshrc for persistence
   ```

3. Navigate to the thecod3x repository root:
   ```bash
   cd ~/path/to/thecod3x
   ```

4. Make the runner script executable:
   ```bash
   chmod +x .automation/run-weekly-monitor.sh
   ```

### Running Weekly Monitoring

Every Monday morning (or whenever you want to check for updates):

```bash
cd ~/path/to/thecod3x
./.automation/run-weekly-monitor.sh
```

This will:
1. Calculate the date range (past 7 days)
2. Run Claude Code with the monitoring instructions
3. Save a report to `.automation/reports/report-YYYY-MM-DD.md`
4. If significant developments are found, Claude Code will propose changes

### Review Process

1. **Review the Report**: Check `.automation/reports/report-YYYY-MM-DD.md` for the full findings

2. **Review Proposed Changes**: Claude Code will show you the proposed markdown changes before creating a PR

3. **Approve or Modify**: 
   - If you approve: Let Claude Code create the branch and PR
   - If you want modifications: Provide feedback and Claude Code will adjust
   - If you want to skip: No PR will be created

4. **Review PR on GitHub**: Go to https://github.com/lawtoshi/thecod3x/pulls and review the PR

5. **Merge**: If satisfied, merge the PR to update the live site

## Customization

### Adjusting Significance Criteria

Edit `weekly-crypto-monitor.md` to change what counts as "significant":

- **AUTO-INCLUDE**: Developments that always warrant a PR
- **EVALUATE**: Developments that require judgment
- **SKIP**: Developments that aren't worth including

### Adding New Sources

Add new search queries or sources in the "Step 1: Search for Developments" section of `weekly-crypto-monitor.md`

### Changing Frequency

The script is designed for weekly runs, but you can run it more or less frequently:
- **Daily**: Run every day for time-sensitive monitoring
- **Bi-weekly**: Run every two weeks for less frequent updates
- **Monthly**: Run once a month for major developments only

Just adjust the date calculation in `run-weekly-monitor.sh` (currently set to 7 days)

## Troubleshooting

### Claude Code Not Found
```bash
npm install -g @anthropic-ai/claude-code
```

### Permission Denied
```bash
chmod +x .automation/run-weekly-monitor.sh
```

### API Key Issues
```bash
echo $ANTHROPIC_API_KEY  # Should show your key
# If empty, export it again
```

### Git Issues
Make sure you're in the repository root:
```bash
cd ~/path/to/thecod3x
git status  # Should show your repo status
```

## Manual Monitoring (Alternative)

If you prefer not to use the shell script, you can run Claude Code directly:

```bash
cd ~/path/to/thecod3x
claude-code "Execute the weekly monitoring task from .automation/weekly-crypto-monitor.md for the period {START_DATE} to {END_DATE}"
```

## Future Enhancements

Once we've tested manual monitoring for 4-6 weeks and refined the process, we can:

1. **Automate with GitHub Actions**: Set up automatic weekly runs
2. **Add Email Notifications**: Get notified when significant developments are found
3. **Integrate More Data Sources**: Add APIs for Federal Register, CourtListener, etc.
4. **Create Dashboard**: Build a simple dashboard to track monitoring history

## Tips for Best Results

1. **Run Consistently**: Try to run at the same time each week (Monday mornings work well)
2. **Review Carefully**: Always review proposed changes before merging
3. **Provide Feedback**: After each run, note what worked well and what didn't
4. **Iterate on Instructions**: Update `weekly-crypto-monitor.md` based on results
5. **Keep Reports**: The reports directory serves as a log of what was checked each week

## Questions?

If you encounter issues or have questions about the monitoring system, create an issue in the repository or reach out to @lawtoshi.
